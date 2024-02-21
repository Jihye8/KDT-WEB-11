const express = require('express');
const controller = require('../controller/member');

const router = express.Router();

// POST / signup 회원가입
router.post('/signup', controller.signup);
//login
router.post('/login', controller.login);
//get /:id 회원조회
router.get('/:id', controller.find);
// Patch /update 정보수정
router.patch('/update', controller.update);
//delete
router.delete('/delete', controller.delete);
module.exports = router;
