const commentsModel = require('../model/comment');
// 방법1

exports.main = (req, res) => {
    res.render('index');
};
exports.comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};
exports.comment = (req, res) => {
    console.log(req.params);
    // { page: '1' } 이런식으로 page라는 변수에 comments의 id가 들어간다 .
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    // comments 객체 리스트에 접근
    res.render('comment', { data: commentsModel[page - 1] });
};

// // 방법2
// // 함수로 각자 정의해서 한번에 exports 해도 좋음.
// const main = (req, res) => {
//     res.render('index');
// };
// const comments = (req, res) => {
//     res.render('comments', { list: comments });
// };
// const comment = (req, res) => {
//     console.log(req.params);
//     // { page: '1' } 이런식으로 page라는 변수에 comments의 id가 들어간다 .
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     // comments 객체 리스트에 접근
//     res.render('comment', { data: comments[page - 1] });
// };
// // 객체니 key, value 형태
// module.exports = { main, comment, comments };
