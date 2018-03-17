const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const globby = require('globby');
const dotenv = require('dotenv');
const md = require('markdown-it');
const mdFrontmatter = require('markdown-it-front-matter');
const yamljs = require('yamljs');
const { JSDOM } = require('jsdom');
const { minify } = require('html-minifier');

dotenv.config();

const OVERVIEW_LENGTH = parseInt(process.env.OVERVIEW_LENGTH || '10', 10);
const ENTRIES_PATH = path.join(process.cwd(), process.env.MD_PATH || 'entries');
const SUMMARY_PATH = path.join(
  process.cwd(),
  process.env.JSON_SUMMARY_PATH || path.join('src', 'static', 'summary.json'),
);
const DETAIL_PATH = path.join(process.cwd(), process.env.JSON_DETAIL_PATH || path.join('src', 'static', 'entries'));

const { document } = new JSDOM().window;
const sources = globby.sync(path.join(ENTRIES_PATH, '*.md'));
const allPostsDate = sources
  .map(source => path.basename(source, '.md'))
  .reverse()
  .map(date => {
    const info = getEntryInfo(date);
    const div = document.createElement('div');
    div.innerHTML = info.html;
    return { date, overview: getOverview(div.textContent.trim().replace(/\n/, ' ')), ...info };
  })
  .filter(({ draft }) => process.env.FILTER_DRAFT !== 'false' || !draft);

outputSummary(allPostsDate);
outputDetail(allPostsDate);

function getEntryInfo (date) {
  return getCompiledData(path.join(ENTRIES_PATH, `${date}.md`));
}

function getCompiledData (filepath) {
  let head = {};
  const renderer = md().use(mdFrontmatter, yaml => {
    head = yamljs.parse(yaml);
  });
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
}

function outputDetail (source) {
  mkdirp.sync(DETAIL_PATH);
  source
    .map(({ date, html, title }) => ({ date, html, title }))
    .forEach(data => fs.writeFileSync(path.join(DETAIL_PATH, `${data.date}.json`), JSON.stringify(data)));
}
