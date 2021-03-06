const ImageminPlugin = require('imagemin-webpack-plugin').default;
const ImageminMozjpeg = require('imagemin-mozjpeg');

const options = {
  optipng: null,
  jpegtran: null,
  gifsicle: {
    // 最適化レベル 1(ちょっと)-3(そこそこ)で指定
    optimizationLevel: 3,
  },
  pngquant: {
    // クオリティ 0(やり過ぎ) ~ 100(ほぼそのまま) -で繋いで2つ書くとmin-maxという意味合いらしいがよくわかりません
    quality: '65-80',
    // 処理速度を指定 1(じっくり) ~ 10(最速) 5％くらい質に違いが出るらしい
    speed: 1,
    // ディザリングを設定 0(無効) ~ 1(最大)
    floyd: 0,
    // フロイド-スタインバーグ・ディザリングを無効化するか
    // https://ja.wikipedia.org/wiki/%E3%83%95%E3%83%AD%E3%82%A4%E3%83%89-%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%B3%E3%83%90%E3%83%BC%E3%82%B0%E3%83%BB%E3%83%87%E3%82%A3%E3%82%B6%E3%83%AA%E3%83%B3%E3%82%B0
    nofs: false,
  },
  plugins: [
    ImageminMozjpeg({
      // クオリティ 0(やり過ぎ) ~ 100(ほぼそのまま)
      quality: 80,
      // プログレッシブjpegを作成するか falseにするとベースラインjpeg
      progressive: true,
    }),
  ],
};

module.exports = async function() {
  this.extendBuild(config => {
    if (!process.isDev) {
      config.plugins.push(new ImageminPlugin(options));
    }
  });
};
