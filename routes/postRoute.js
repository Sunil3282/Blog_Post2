const express = require('express');

const postControllers = require('../controllers/postController')
const checkAuthentication  = require('../middleware/authMiddleware')

const postRoute = express.Router();


postRoute.post('/create',checkAuthentication.checkAuth,postControllers.save);
postRoute.get('/show',postControllers.show);
postRoute.get('/showOne/:id',checkAuthentication.checkAuth,postControllers.showOne);
postRoute.patch('/upDate/:id',checkAuthentication.checkAuth,postControllers.update)
postRoute.delete('/delete/:id',checkAuthentication.checkAuth,postControllers.delete)

module.exports = postRoute;