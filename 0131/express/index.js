const express = require('express');
const app = express();
const PORT = 8000;
//view engine만들기
app.set('view engine', 'ejs');
app.set('views', './views');

// 정적 파일 불러오기
// style.css
app.use('/public', express.static(__dirname + '/public'));

// localhost : 8000
app.get('/', (req, res) => {
    // 클라이언트에 응답 데이트를 보낸 때
    res.send('hello Express');
});

app.get('/kdt', (req, res) => {
    // render() view 엔진 렌더링
    // test.ejs의 명 입력
    // render할 때 데이터(대부분 객체형태)를 전달할 수 있다.
    res.render('test', { name: '홍길동' });
});
// /주소,function(res,req){}
app.get('/gugu', (req, res) => {
    res.render('gugudan', {
        data: 2,
        dan: 5,
        len: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    });
});
app.get('/fruit', (req, res) => {
    res.render('fruit', {
        fruit: [
            { name: 'apple', kor: '사과' },
            { name: 'bananas', kor: '바나나' },
            { name: 'grapes', kor: '포도' },
            { name: 'peaches', kor: '복숭아' },
        ],
    });
});
// 항상 맨아래
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
