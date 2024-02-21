const { Member, Profile } = require('../models');

// 회원가입
exports.signup = async (req, res) => {
    const { userId, pw, username, age, email } = req.body;
    // 생성 create
    const find = await Member.findOne({ where: { userId } });
    if (find) {
        res.json({ result: false, data: { msg: '이미 존재하는 회원' } });
    } else {
        const result = await Member.create({ userId, password: pw });
        console.log('find', result);
        const result2 = await Profile.create({
            username,
            age,
            email,
            memberId: result.id,
        });
        console.log('profile', result2);
        res.json({ result: true, data: { msg: '회원가입 성공' } });
    }
};

exports.login = async (req, res) => {
    const { userId, password } = req.body;
    console.log(userId, password);
    //검색 findOne
    const result = await Member.findOne({ where: { userId, password } });
    console.log('login', result);
    if (result) {
        res.json({ result: true, data: result });
    } else {
        res.json({ result: false });
    }
};

exports.find = async (req, res) => {
    const { id } = req.params;
    const find = await Member.findOne({ where: { id } });
    const result = await Member.findByPk(id, {
        include: [{ model: Profile, attributes: ['username', 'age'] }],
        //include를 사용해 profile도 불러오는데 이때 username만 출력하게 하는 attribute
    });
    console.log('find', find);
    console.log('result', result);
    res.json({ result: true, data: result });
};
exports.update = async (req, res) => {
    const { id, pw } = req.body;
    const result = await Member.update(
        { password: pw },
        { where: { memberId: id } }
    );
    console.log('update', result);
    res.json({ result: true });
};
exports.delete = async (req, res) => {
    const { id } = req.body;
    const result = await Member.destroy({ where: { id } });
    console.log('delete', result);
    res.json({ result: true });
};
