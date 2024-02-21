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
app.get('/chat', (req, res) => {
    res.render('chat');
});
//소켓 기본채팅 예제
io.on('connection', (socket) => {
    console.log('조인전', socket.rooms);
    socket.on('join', (res) => {
        //채팅방을 생성하는 방법 중 하나는 join(방아이디) 사용하는 것
        //방이 존재하면 그 방으로 접속한다.
        socket.join(res);
        socket.chatRoom = res;
        console.log('조인 후', socket.rooms);
        // 현재 접속한 브라우저를 제외한 전체 사용자의 브라우저에 메세지 전달
        socket.broadcast
            .to(res)
            .emit('create', '새로운 브라우저가 입장하였습니다.');
    });
    // 특정 방에 메세지 보내기 가능
    socket.on('message', (res) => {
        io.to(socket.chatRoom).emit('chat', res);
    });
});

// //기본예제 - 연결
// io.on('connection', (socket) => {
//     console.log('조인전', socket);
//     // 이벤트를 받는 쪽
//     socket.on('open_message', (arg, arg2, cb) => {
//         console.log(arg, arg2);
//         cb(arg, arg2);
//     });

//     //이벤트를 보내는 쪽
//     socket.on('form_message', (arg) => {
//         console.log(arg);
//         socket.emit('backend_message', arg);
//     });
// });

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
