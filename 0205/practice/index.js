const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
// app.set('views', './views');

app.use('/uploads', express.static(__dirname + '/uploads'));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '/uploads');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const newName =
            path.basename(file.originalname, ext) + Date.now() + ext;
        cb(null, newName);
    },
});
const limits = {
    fileSize: 5 * 1024 * 1024, //5mb제한
};
const upload = multer({ storage: storage, limits: limits });
//===페이지
app.get('/', (req, res) => {
    res.render('index');
});
//===요청, 응답 데이터
app.post('/upload', upload.single('userfile'), (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const { id, pw, username, age } = req.body;
    res.render('result', { file: req.file.path, id, pw, username, age }); //result.ejs로 데이터 전송
});
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
