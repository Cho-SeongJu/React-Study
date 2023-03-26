const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js", // index.js 파일을 시작으로부터 엮여져 있는 여러가지 script파일을 불러오는 것이라 enrty로 설정
  // 번들링을 하면서 적용할 수 있는 rule을 추가
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }], // 모든 js파일을 읽겠다 라는 뜻. 이 파일들을 읽으면서 babel-loader을 적용하겠다.
    // babel-loader 웹팩이 파일을 불러들일떄도 JSX를 읽는데 그걸 webpack은 못읽기 떄문에 번들링하는 과정에서 babel-loader를 통해서 우리가 설정한 babel을 돌릴 수 있게 해준다.
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  optimization: { minimizer: [] }, // webpack은 기본적으로 js를 압축하는데 일단 babel이랑 확인해야하기 때문에 빈 배열
  // 번들링을 한 결과를 어떤 위치에 위치시킬건지 path 설정
  output: {
    path: path.resolve(__dirname, "dist"), // 파일명 dist폴더가 만들어지고 그 안에 output된 결과가 저장된다.
    filename: "bundle.js", // 파일명
  },

  devServer: {
    static: "./dist", // 이 dist파일에 업데이트가 발생할 때 마다 계속 바로바로 런타임을 업데이트 해주는 명령을 실행한다.
    hot: true,
  },
};
