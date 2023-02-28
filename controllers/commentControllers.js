const { Comment } = require('../models');

const commentControllers = {};

try {
    commentControllers.save = async (req, res, next) => {
        const id = req.params.id;
        let commentData = {
            description: req.body.description,
            postId:id,
            userId :1
        }
        const post = await Comment.create(commentData);
        if (post) {
            return res.status(201).json(post);
        }
    }
} catch (err) {
    return res.status(500).json({
        message: "Due to server error!!",
        error: err
    })
}

 try{
    commentControllers.show = async (req,res,next)=>{
        const comment = await Comment.findAll();
        if(comment.length == 0){
            res.status(400).json({
                message:"Comment not found!!"
            })
        }else{
            res.status(200).json(comment)
        }
    }
 }catch(err){
    res.status(500).json({
        message:"some internal server error!!"
    })
 }

module.exports = commentControllers;