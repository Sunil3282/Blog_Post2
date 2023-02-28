const express = require('express');

const userControllers = require('../controllers/userControllers')

const userRoute = express.Router();

userRoute.post('/signUp',userControllers.signUp);
userRoute.post('/login',userControllers.login);

module.exports = userRoute;