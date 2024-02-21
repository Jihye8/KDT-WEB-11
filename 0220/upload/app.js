const express = require('express');
const aws = require('aws-sdk'); // aws 설정을 위한 모듈
const multer = require('multer');
const multerS3 = require('multer-s3'); // aws s3에 파일 업로드 하기 위한 multer 설정
const app = express();
const PORT = 8000;

//aws 설정 - IAM
aws.config.update({
    accessKeyId: 'AKIA2UC3BX3LBAUAWV5T', //액세스 키
    secretAccessKey: 'mC2FRssef5j2OtKYlQh7bSHtqlNMhkRE0zgttpbN', // 액세스 비밀번호
    region: 'ap-northeast-2',
});
//aws s3 인스턴스 생성
const s3 = new aws.S3();

// multer
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'jihye-bucket',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, { fieldName: file.fieldname });
        },
        // key는 파일명
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname);
        },
    }),
});

// 미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('index');
});

//api
app.post('/upload', upload.array('files'), (req, res) => {
    console.log(req.files);
    res.send(req.files);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
