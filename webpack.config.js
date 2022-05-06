//import시 require()
//node.js의 전역에서 path라는 모듈 불러오기
const path = require('path');

//export시 module.deports = {}
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
};
