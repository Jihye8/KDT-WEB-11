const http = require('http');
const express = require('express');
const socketIo = require('socket.io');

const app = express();
const PORT = 8000;

const server = http.createServer(app); //http서버
const io = socketIo(server); //socket서버

//미들웨어
app.set('view engine', 'ejs');

//라우터
app.get('/', (req, res) => {
    res.render('client');
});
//사용자 정보 갱신 함수
function getUserList(room) {
    //room에 접속한 모든 사용자
    const users = [];
    //room은 현재 접속한 room의 id - res.roomName
    // 채팅룸에 접속한 socket.id 값을 찾음
    const clients = io.sockets.adapter.rooms.get(room);
    console.log('clients', clients);
    if (clients) {
        clients.forEach((client) => {
            const userSocket = io.sockets.sockets.get(client);
            console.log('userSocket', userSocket);
            const info = { userName: userSocket.userName, key: client };
            users.push(info);
        });
    }
    return users;
}

const roomList = [];

//소켓서버
io.on('connection', (socket) => {
    //socket: 접속한 웹브라우저
    //io: 접속해있는 모든 웹브라우저
    //웹브라우저가 접속이되면 고유한 id값이 생성됨. socket.id로 확인가능
    //console.log(socket.id);
    //채팅방 만들기
    socket.on('create', (res, cb) => {
        //join(방이름): 해당 방이름이 없으면 생성. 존재하면 입장
        console.log(res);
        socket.join(res.roomName);
        console.log('방생성 후', socket.rooms);
        //sokcet객체안에 원하는 값을 할당
        socket.roomName = res.roomName;
        socket.userName = res.userName;
        //나를 제외한 모든 방사람에게 메세지 전달
        socket
            .to(res.roomName)
            .emit('notice', `${socket.id}님이 입장하셨습니다`);
        // 콜백함수 역할 - create으로 roomName과 userName을 받고 나서
        // notice를 해준 후에 다시 받은 roomName과 userName을 콜백 cb()으로 넘겨준다.
        cb();

        // 채팅방 목록 갱신
        if (!roomList.includes(res.roomName)) {
            roomList.push(res.roomName);
            // 갱신된 목록은 전체가 다 봐야 한다.
            io.emit('roomList', roomList);
        }

        // 사용자 정보 갱신
        const userList = getUserList(res.roomName);
        // 사용자의 정보 front로 넘겨준다.
        io.to(res.roomName).emit('userList', userList);
    });
    //메세지
    socket.on('sendMessage', (res) => {
        const { message, user, select } = res;
        console.log(res);

        if (select === 'all') {
            //특정방에 전체사용자에게 메세지 보내기
            io.to(socket.roomName).emit('newMessage', { message, user });
        } else {
            //특정 사용자에게만 메세지 보내기
            io.to(select).emit('newMessage', { message, user, dm: true });
        }
        // 자기 자신에게 메세지 보내기
        socket.emit('newMessage', { message, user, dm: true });
    });
});

server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
