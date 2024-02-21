require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// //임시 DB -> model
// const comments = [
//     {
//         id: 1,
//         userid: 'hello',
//         date: '2024-02-01',
//         comment: '안녕하세요',
//     },
//     {
//         id: 2,
//         userid: 'happy',
//         date: '2024-02-03',
//         comment: '반갑습니다',
//     },
//     {
//         id: 3,
//         userid: 'lucky',
//         date: '2024-02-05',
//         comment: '행복하세요',
//     },
//     {
//         id: 4,
//         userid: 'fail',
//         date: '2024-02-07',
//         comment: '축구망했다',
//     },
// ];

// const router = require('./routes/index');
// 이떄 index는 항상 생략 가능
const router = require('./routes');
// 모듈화 한거 연결해 주기
app.use('/', router);
// router -> routes/index.js
// app.get('/', (req, res) => {
//     res.render('index');
//     // console.log('hi');
//     // console.log(process.env.KDT); //kdt11
//     // console.log(process.env.NAME); //김지혜
//     // // .env 파일에 작성한 환경변수가 적용됨을 확인할 수 있다.
//     // // 앞으로 필요한 환경변수 적어서 사용
//     // console.log(process.env.NODE_ENV);
//     // if (process.env.NODE_ENV === 'development') {
//     //     console.log('라이브 서버입니다.');
//     // } else if (process.env.NODE_ENV === 'development ') {
//     //     console.log('개발용 서버입니다.');
//     // }
// });

// app.get('/comments', (req, res) => {
//     res.render('comments', { list: comments });
// });
// // :을 page앞에 붙여서 변수임을 나타낸것
// app.get('/comment/:page', (req, res) => {
//     console.log(req.params);
//     // { page: '1' } 이런식으로 page라는 변수에 comments의 id가 들어간다 .
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     // comments 객체 리스트에 접근
//     res.render('comment', { data: comments[page - 1] });
// });
const userRouter = require('./routes/user');
app.use('/user', userRouter);

const userLogin = require('./routes/login');
app.use('/login', userLogin);

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
