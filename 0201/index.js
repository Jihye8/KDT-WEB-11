const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식
app.use(express.json()); //json 방식
//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// //router : 페이지 만드는 일체의 행위
// app.get('/', (req, res) => {
//     res.render('index'); //index.ejs
// });

// app.get('/getForm', (req, res) => {
//     // get방식일 때
//     console.log(req.query);
//     res.render('result', { title: 'GET 요청 결과', userInfo: req.query });
// });

// app.post('/postForm', (req, res) => {
//     console.log(req.body);
//     res.render('result', { title: 'POST 요청 결과', userInfo: req.body });
// });

app.get('/', (req, res) => {
    res.render('index2');
});

app.get('/getForm', (req, res) => {
    console.log(req.query);
    res.render('result2', { title: 'GET으로 정보 받기', userInfo: req.query });
});
app.post('/postForm', (req, res) => {
    console.log(req.body);
    res.render('result2_post', {
        title: 'POST로 정보 받기',
        userInfo: req.body,
    });
});
//use는 http 전송방식을 이해하지 못한다.
//같은 router(url)로 get, post를 만들 수 있지만 use로는 접근 불가
//예를 들어 get방식의 '/login'과 post 방식의 '/login'은 다른 페이지지만
// use는 동일한 페이지로 인식
// 그래서 use는 404페이지에 주로 사용한다.
app.use(
    '*',
    (req,
    (res) => {
        res.render('404');
    })
);
//서버 실행
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
