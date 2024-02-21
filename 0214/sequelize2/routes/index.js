const express = require('express');
const {
    main,
    post,
    detail,
    write,
    signup,
    login,
    profile,
} = require('../controller');

const router = express.Router();
// 메인페이지
router.get('/', main);
// 게시판페이지
router.get('/post', post);
router.get('/post/:id', detail);
router.get('/write', write);
router.get('/signup', signup);
router.get('/login', login);
router.get('/profile', profile);
module.exports = router;
