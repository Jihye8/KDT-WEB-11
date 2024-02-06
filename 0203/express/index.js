const express = require('express');
const multer = require('multer');
const path = require('path'); //폴더와 파일을 쉽게 조작하도록 제공
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
//정적파일 설정
//http://localhost:8000/uploads/파일명
//경로 설정
app.use('/uploads', express.static(__dirname + '/uploads'));

// multer설정
const upload = multer({
    // 업로드 파일을 저장할 폴더 지정
    // 자동으로 uploads 생성된다.
    dest: 'uploads/',
});
// multer 세부설정
//방법1---------------------
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
// //방법2------------------
// const storage = multer.diskStorage({
//     destination: (req, file, done) => {
//         done(null, 'uploads/');
//     },
//     filename: (req, file, done) => {
//         const ext = path.extname(file.originalname); //확장자 추출
//         const newName =
//             path.basename(file.originalname, ext) + Date.now() + ext;
//         done(null, newName);
//     },
// });
// const limits = {
//     fileSize: 5 * 1024 * 1024,
// };
// const uploadDatailPart2 = multer({ storage, limits });

//================
//페이지 router
//---페이지
app.get('/', (req, res) => {
    res.render('index');
});
//--요청, 응답 데이터
app.post('/uploads', uploadDatail.single('userfile'), (req, res) => {
    console.log('file:', req.file);
    console.log('title: ', req.body);
});
// 멀티(ver1) :array()
app.post('/uploads/array', uploadDatail.array('userfile'), (req, res) => {
    console.log('files', req.files);
    console.log('files', req.body);
});
//멀티(ver2): fields()
app.post(
    '/uploads/fields',
    uploadDatail.fields([{ name: 'userfile1' }, { name: 'userfile2' }]),
    (req, res) => {
        console.log('file', req.files);
        console.log('title', req.body);
    }
);

//동적
app.post('/uploads/axios', uploadDatail.single('file'), (req, res) => {
    res.send({ file: req.file, title: req.body });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
