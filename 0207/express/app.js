require('dotenv').config();

const express = require('express');
const app = express();
const PROT = 8000;

app.set('view engine', 'ejs');

const router = require('./routes');
app.use('/', router);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const userLogin = require('');
