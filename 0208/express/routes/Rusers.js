const express = require('express');
const controller = require('../controller/Cusers');

const router = express.Router();

router.get('/', controller.main); // main은 메인 페이지 열어주는

router.post('/register', controller.register);

module.exports = router;
