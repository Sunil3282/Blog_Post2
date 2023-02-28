const express = require('express');

const commentRoute = express.Router()
const commentControllers = require('../controllers/commentControllers')
const checkAuthentication  = require('../middleware/authMiddleware')

commentRoute.post('/create/:id',checkAuthentication.checkAuth,commentControllers.save);
commentRoute.get('/show',commentControllers.show);

module.exports = commentRoute;