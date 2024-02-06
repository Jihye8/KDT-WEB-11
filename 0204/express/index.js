const express = require('express');
const multer = require('multer');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
//view enigne ejs 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//router
//get
app.get('/', (req, res) => {
    res.render('join-get');
});
app.get('/login', (req, res) => {
    res.render('login-post');
});
app.get('/form', (req, res) => {
    res.render('file-upload');
});
app.get('/axios', (req, res) => {
    console.log('req:', req.query); //이렇게해야 내가 원하는 req을 통해 보낸 데이터만 전송
    const { name, gender, year, month, day, hobby } = req.query;
    res.send({ name, gender, year, month, day, hobby });
});

//로그인 정보
const member_id = 'jihye';
const member_pw = 1234;
let result;
app.post('/axios', (req, res) => {
    const { id, pw } = req.body;
    if (member_id === req.body.id && member_pw === req.body.pw) {
        const data = {
            message: `${id}님 로그인에 성공하셨습니다.`,
            result: true,
        };
        res.send(data);
    } else {
        const data = { message: '로그인 실패', result: false };
        res.send(data);
    }
});
app.post('/axios-form', (req, res) => {
    console.log(req.body);
});
//서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
