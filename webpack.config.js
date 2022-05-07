//import시 require()
//node.js의 전역에서 path라는 모듈 불러오기
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

//export시 module.exports = {}
module.exports = {
  // 파일을 읽기 시작하는 첫 진입점. js파일
  entry: './js/main.js',
  // 컴파일된 결과물 관련 설정
  output: {
    //결과물 경로 설정.
    //절대경로를 설정해야하니 import로 불러온 path를 사용해 dist 폴더를 생성한다고 명시
    //__dirname -> 현재 이 파일이 있는 경로를 지칭하는 것
    path: path.resolve(__dirname, 'dist'),

    //새로 빌드 시 이전에 빌드했던 파일들을 제거하고 싶다면 true
    // 5.20.0+ 버전부터 사용 가능!
    clean: true,

    //결과물 이름 설정. entry에서 읽었던 파일과 동일명으로 작성 가능
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  //플러그인 추가하기
  //번들링 후 결과물의 처리 방식 등 다양한 설정을 적용하는 곳
  plugins: [
    //불러온 HtmlPlugin을 생성자 함수 형태 'new'로 실행 -> 결과가 반환되어 plugins의 배열 데이터에 담길 것
    new HtmlPlugin({
      //플러그인의 옵션은 객체형태로 넣는다
      template: './index.html',
    }),
    new CopyPlugin({
      //설정한 폴더 안 내용을 복사해주는 플러그인
      patterns: [
        { from: 'static' }, //생성한 static폴더 안 내용을 번들링으로 설정한 폴더 안으로 복사하도록 설정
      ],
    }),
  ],

  //개발서버 명시하는 설정 추가
  devServer: {
    host: 'localhost',
  },
};
