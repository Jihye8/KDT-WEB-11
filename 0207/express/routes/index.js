const express = require('express');
const router = express.Router();
const controller = require('../controller/comment');

// router
router.get('/', controller.main);

router.get('/comments', controller.comments);
// :을 page앞에 붙여서 변수임을 나타낸것
router.get('/comment/:page', controller.comment);
// 모듈화
module.exports = router;
// 외부에서 router 변수에 담은 것들 모두 사용 가능
