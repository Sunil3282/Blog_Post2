const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');

const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute')
const userRoute = require('./routes/userRoute')
const swaggerDocs = require('./doc/swaggerDoc')

const port = 3000;
const app = express();
app.use(bodyParser.json());

app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(swaggerjsdoc(swaggerDocs)));
app.use('/post',postRoute);
app.use('/comment',commentRoute);
app.use('/user',userRoute);

app.listen(port,(req,res,next)=>{
    console.log(`Server is running on port: ${port}`);
})

module.exports = app;