const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const uploadDatail = multer({
    //storage :저장할 공간에 대한 정보(필수)
    // diskStorage : 파일을 디스크에 저장하기 위한 모든 제어 기능을 제공
    storage: multer.diskStorage({
        // destination : 업로드할 파일을 저장할 폴더 지정(요청, 업로드된 파일, 콜백함수)
        // done : 콜백함수
        destination(req, file, done) {
            done(null, 'uploads/');
            // 에러처리 안하면 null
        },
        // filename : 파일이름 결정(요청, 업로드된 파일, 콜백함수)
        // 지정해주지 않으면 파일이 정상적으로 열리지 않음 (이상한 난수 파일명을 갖게 됨)
        filename(req, file, done) {
            //extname(): 확장자를 추출
            const ext = path.extname(file.originalname); //확장자 추출
            // basename(): 파일이름 추출(파일의 오리지널 이름, 확장자)=> 확장자를 제외해서 이름만 추출하는 방식
            const newName =
                path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),
    //limits : 파일 저장 용량 제한(option)
    limits: { fileSize: 5 * 1024 * 1024 }, //5mb제한
});

app.set('view engine', 'ejs');
app.set('views', './views');
//페이지
app.get('/axiosGet', (req, res) => {
    res.render('get');
});
app.get('/axiosPost', (req, res) => {
    res.render('post');
});
app.get('/', (req, res) => {
    res.render('post-pic');
});

//데이터 처리
// const id = 'kdt11';
// const pw = '1234';
app.get('/resultGet', (req, res) => {
    console.log('요청값', req.query);
    // res.send(req.query);
    res.send({
        response: req.query,
    });
});

app.post('/resultPost', (req, res) => {
    console.log('요청값 ', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (id === reqId && pw === reqPw) {
        res.send({ result: true, userInfo: { id } });
    } else {
        res.send({ result: false, userInfo: null });
    }
});

app.post('/join/axios', uploadDatail.array('userfile'), (req, res) => {
    console.log('files:', req.file);
    console.log('data:', req.body);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
