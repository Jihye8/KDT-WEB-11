// const connect = require('./module.js');
// console.log(connect);

// const { a, b, c } = require('./module.js');
// console.log(a, b, c);

const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    // res.writeHead(200);
    // res.write('<h1>hello node.js</h1>');
    // res.end('<p>end</p>');
    // js는 하나의 thread이므로 오류가 나면 멈춰버리기 때문에 try-catch구문을 사용하여 try가 실행되다가 오류가 나면 catch 구문이 실행되도록 처리한다.
    try {
        // index.html파일이 있을 때는 실행
        const data = fs.readFileSync('./index.html');
        res.writeHead(800);
        res.end(data);
    } catch (error) {
        // index.html파일이 없을 때 실행
        console.log(error);
        res.writeHead(404);
        res.end(error.message);
    }
});

// server.on('request', function () {
//     console.log('요청 이벤트');
// });
// server.on('connection', function () {
//     console.log('요청 이벤트');
// });
// listen : 서버를 실행
server.listen(8000, () => {
    console.log('8000번 포트 실행');
});
