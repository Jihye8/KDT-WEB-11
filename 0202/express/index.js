const express = require('express');
const app = express();
const PORT = 8000;

//미들웨어 가져오기
//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//ejs 템플릿 설정
app.set('view engine', 'ejs');
app.set('views', './views');

//router
//===페이지
app.get('/', (req, res) => {
    res.render('index'); //index.ejs
});
app.get('/submit', (req, res) => {
    res.render('submit');
});
app.get('/func', (req, res) => {
    res.render('func');
});
//===
/*
 *render() : 뷰페이지렌더링 render(뷰페이지이름, 테이터(선택))
 *send() : 모든 타입의 데이터 전송 (즉, 문자열, 배열, 객체, 숫자 등)
 *json() : 객체타입 데이터 전송
 *redirect(페이지명) : 페이지 강제 이동
 */
//===요청과 응답
//ajax get
app.get('/ajax', (req, res) => {
    console.log('요청값', req.query);
    //Json 객체니 구조분해할당 가능
    const { name, email } = req.query;
    // 프론트로 보내는  데이터
    res.send({ result: true, user: `${name}님`, address: `주소 : ${email}` });
});
//ajax post
app.post('/ajax', (req, res) => {
    console.log('요청값', req.body);
    const { name, email } = req.body;
    //프론트로 보내는 데이터
    res.send({ userName: `${name}님`, email });
    //key 와 value 의 변수가 동일하면 email과 같이 하나의 변수만 입력해주면 된다.
});
//axios get
app.get('/axios', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});

app.post('/axios', (req, res) => {
    console.log('요청값', req.body);
    //req data
    const { name, email } = req.body;
    //res data
    const data = {
        name: `안녕하세요 ${name}님`,
        address: `이메일 주소는 ${email}입니다.`,
    };
    res.send(data);
});
app.get('/fetch', (req, res) => {
    console.log('요청값', req.query);
    res.send(req.query);
});
app.post('/fetch', (req, res) => {
    console.log('fetch post 요청값', req.body);
    res.send(req.body);
});
//실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
