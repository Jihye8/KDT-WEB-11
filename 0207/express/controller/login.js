const loginInfo = require('../model/login');

exports.main = (req, res) => {
    res.render('index');
};
exports.login = (req, res) => {
    const { id, pw } = req.body;
    if(loginInfo.id === id && loginInfo.pw === pw){
        res.send({result:true, userInfo :{id}})
    }else{
        res.send({result:false,userInfo :{null}})
    }
};
