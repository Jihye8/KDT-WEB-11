const express = require('express');
const router = express.Router();
const controller = require('../controller/login');
// 경로를 controller에 있는 login.js와 연결해주는

router.get('/', controller.login);

module.exports = router;
