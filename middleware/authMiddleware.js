require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(403).json({
            message: "No token provided!!"
        })
    }
    const accessToken = authHeader.split(' ')[1];
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, userInf) => {
        if (err) {
            return res.status(403).json(
                { message: "Invalid Token" }
            )
        }

        req.userData = userInf
        // console.log(req.userData);
        return next();

    })
}