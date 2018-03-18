#!/usr/bin/env node

/*
 * --- scripts sample
 * "md": "node modules/md2json.js --overview-length 100 --entry-dir entries --summary-path src/static/parties.json --detail-path src/static/parties",
 * "dev:md": "npm run md -- -w -f",
 *
 * --- add layouts/default.vue
 * <style lang="postcss">
 * @import 'prismjs/themes/prism-okaidia.css';
 * </style>
 *
 * --- dependencies
 * commander chalk chokidar mkdirp globby markdown-it markdown-it-front-matter markdown-it-prism yamljs jsdom html-minifier
 */

const fs = require('fs');
const path = require('path');
const program = require('commander');
const chokidar = require('chokidar');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const globby = require('globby');
const md = require('markdown-it');
const mdFrontmatter = require('markdown-it-front-matter');
const mdPrism = require('markdown-it-prism');
const yamljs = require('yamljs');
const { JSDOM } = require('jsdom');
const { minify } = require('html-minifier');

const { document } = new JSDOM().window;

/*
 * set commandline options
 */
program
  .version('0.0.1')
  .option('-w, --watch', 'Watch mode enable?')
  .option('-f, --force', 'Output draft files.')
  .option('--overview-length <n>', 'Overview text length.', 10)
  .option('--entry-dir [value]', 'Entries directory.', 'entries')
  .option('--summary-path [value]', 'Summary json output fullpath.', path.join('src', 'static', 'summary.json'))
  .option('--detail-path [value]', 'Detail json output path.', path.join('src', 'static', 'entries'))
  .parse(process.argv);

/*
 * set global configs
 */
const OVERVIEW_LENGTH = program.overviewLength;
const ENTRIES_PATH = path.join(process.cwd(), program.entryDir);
const SUMMARY_PATH = path.join(process.cwd(), program.summaryPath);
const DETAIL_PATH = path.join(process.cwd(), program.detailPath);

/*
 * functions
 */
function getEntryInfo (date) {
  return getCompiledData(path.join(ENTRIES_PATH, `${date}.md`));
}

function getCompiledData (filepath) {
  let head = {};
  const renderer = md()
    .use(mdFrontmatter, yaml => {
      head = yamljs.parse(yaml);
    })
    .use(mdPrism);
  const source = fs.readFileSync(filepath, 'utf8');
  const html = minify(renderer.render(source).trim(), { collapseWhitespace: true });

  return { html, ...head };
}

function getOverview (source) {
  return source.length <= OVERVIEW_LENGTH ? source : `${source.substring(0, OVERVIEW_LENGTH)}…`;
}

function outputSummary (source) {
  const data = source.map(({ date, overview, title }) => ({ date, overview, title }));
  fs.writeFileSync(SUMMARY_PATH, JSON.stringify(data));
  console.log(`${chalk.bgBlue('OUTPUT SUMMARY')} ${SUMMARY_PATH}`);
}

function parseOutputData ({ date, html, title }) {
  return { date, html, title };
}

function outputDetail (data) {
  fs.writeFileSync(path.join(DETAIL_PATH, `${data.date}.json`), JSON.stringify(data));
  console.log(`${chalk.bgGreen('OUTPUT DETAIL')} ${path.join(DETAIL_PATH, `${data.date}.json`)}`);
}

function outputDetails (source) {
  mkdirp.sync(DETAIL_PATH);
  source.map(parseOutputData).forEach(outputDetail);
}

function getJsonData ({ from: date }) {
  const info = getEntryInfo(date);
  const div = document.createElement('div');
  div.innerHTML = info.html;
  return { date, overview: getOverview(div.textContent.trim().replace(/\n/, ' ')), ...info };
}

function getPostsData () {
  const sources = globby.sync(path.join(ENTRIES_PATH, '*.md'));
  return sources
    .map(source => path.basename(source, '.md'))
    .reverse()
    .map(date => getJsonData({ from: date }))
    .filter(({ draft }) => program.force || !draft);
}

function main () {
  const allPostsDate = getPostsData();
  outputSummary(allPostsDate);
  outputDetails(allPostsDate);
}

/*
 * run
 */
main();

if (program.watch) {
  console.log(`\n${chalk.bgYellow('WATCH')} ${ENTRIES_PATH}\n`);
  chokidar.watch(ENTRIES_PATH, { ignoreInitial: true }).on('all', (event, changePath) => {
    const allPostsDate = getPostsData();
    const date = path.basename(changePath, '.md');
    console.log(`${chalk.bgMagenta(event)} ${changePath}`);

    outputSummary(allPostsDate);
    const detail = getJsonData({ from: date });
    outputDetail(parseOutputData(detail));
    console.log('');
  });
}
