require('dotenv').config();
const { User } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userControllers = {};
try {
    userControllers.signUp = async (req, res, next) => {

        const userinf = await User.findOne({ where: { email: req.body.email } });
        if (userinf) {
            return res.status(409).json({
                message: "email already exist",
            })
        }
        const hashPassword = await bcrypt.hash(req.body.password, 12)
        const userData = {
            email: req.body.email,
            password: hashPassword
        }

        const createUser = await User.create(userData);
        if (createUser) {
            return res.status(201).json({
                message: "User is created Successfully!",
                email: createUser.email
            })
        }



    }
}
catch (err) {
    res.status(500).json({
        message: "Some internal server error!!"
    })
}


    
    try{
        userControllers.login = async (req,res,next)=>{
           const userInf = await User.findOne({where:{email:req.body.email}});
            if(userInf == null){
                res.status(404).json({
                    message:"Invalid email or password!!"
                })
            }
            bcrypt.compare(req.body.password,userInf.password,(err,result)=>{
                if(result == null){
                    res.status(404).json({
                        message:"Invalid email or password!!"
                    })
                }
                jwt.sign({
                    email: userInf.email,
                    userId: userInf.id
                }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    res.status(200).json({
                        "token": token,
                        message: "Authentication Successfully"
                    })
                })
            })
        }

    }catch(err){
        return res.status(500).json({
            message:"Some internal server error.."
        })
    }





module.exports = userControllers;