// const a = 10;
// const b = 20;

// //하나의 모듈 파일에 하나의 모듈 만들기
// function connect() {
//     return a + b;
// }

// module.exports = connect;

//하나의 모듈 파일에 여러개 모듈 만들기
const a = 10;
const b = 20;
const c = 'new';

module.exports = { a, b, c };
