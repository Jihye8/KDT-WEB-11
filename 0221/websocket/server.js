const express = require('express');
const http = require('http');
const ws = require('ws');
const app = express();
const PORT = 8000;
//http 서버
const server = http.createServer(app);
//웹소켓 서버 연결
const wss = new ws.Server({ server });
//미들웨어
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) => {
    res.render('client');
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

//웹소켓
//브라우저(클라이언트)들을 담을 배열 변수
const sockets = [];
wss.on('connection', (socket) => {
    //매개변수 socket은 접속한 브라우저 뜻함
    console.log(wss.clients);
    console.log('클라이언트가 접속되었습니다.');

    //메세지 이벤트 - 클라이언트에게 메세지 받는 이벤트
    socket.on('message', (message) => {
        //웹소켓을 통해 클라이언트와 서버 간의 데이터를 주고 받을 때는
        //일반적으로 문자열 또는 버퍼 형태로 전달된다.
        //버퍼를 쓰는 이유 : 서버가 모두 다른 환경(자바, node.js, pyhton등)이기 때문에
        //객체를 전달할 때는 객체를 일렵의 바이트로 변환하는 직렬화 과정이 필요

        console.log(message);
        const msg = JSON.parse(message);
        // console.log('클라이언트:', msg.user);
        // console.log('클라이언트에게 받은 메세지:', msg.message);
        // socket.send(`서버 메세지 : ${msg.message}`);
        wss.clients.forEach((value) => {
            value.send(`${msg.user}: ${msg.message}`);
        });
    });

    //오류 이벤트
    socket.on('error', (err) => {
        console.log('오류발생', err);
    });

    //종류 이벤트
    socket.on('close', () => {
        console.log('접속 종류');
    });
});
