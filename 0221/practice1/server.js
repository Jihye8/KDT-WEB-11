const http = require('http');
const express = require('express');
const SocketIO = require('socket.io');
const app = express();
const PORT = 8000;

//http서버
const server = http.createServer(app);
// socket 서버
const io = SocketIO(server);

// 미들웨어
app.set('view engine', 'ejs');
//router
app.get('/', (req, res) => {
    res.render('client');
});
//연결
io.on('connection', (socket) => {
    console.log('조인전', socket);
    // 이벤트를 받는 쪽
    socket.on('hello', (arg) => {
        console.log(arg);
        socket.emit('hello_res', '안녕하세요!');
    });
    socket.on('study', (arg) => {
        console.log(arg);
        socket.emit('study_res', '열공하세요');
    });
    socket.on('bye', (arg) => {
        console.log(arg);
        socket.emit('bye_res', '안녕');
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
