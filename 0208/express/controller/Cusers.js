const Users = require('../model/Musers');
// 데이터는 변수 대문자로 시작하게 하기

const main = (req, res) => {
    res.render('index', { users: Users }); //index.ejs
};
const register = (req, res) => {
    const { name, gender, major } = req.body;
    Users.push({
        id: Users.length + 1,
        name,
        gender,
        major,
    });
    // 이걸 model의 Musers.js에 넣어준다.
    res.send({ result: true });
};

module.exports = { main, register };
