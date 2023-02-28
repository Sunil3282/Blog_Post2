const { Post,Comment } = require('../models');

const postControllers = {};

try {
    postControllers.save = async (req, res, next) => {
        let postData = {
            title: req.body.title,
            content: req.body.content,
            imageUrl: "sunil.jpg",
            userId: 1
        }
        const post = await Post.create(postData);
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

try {
    postControllers.show = async (req, res, next) => {
        const posts = await Post.findAll({
         attributes: {
            exclude:['createdAt','updatedAt']
         },
                include: [
                    {
                      model: Comment,
                      as:'comments',
                      attributes: ['id', 'description']
                    },
                  ],
            
        });
        if (posts === null) {
            res.status(404).json({
                message: "Post not found"
            });
        } else {
            res.status(200).json(posts);
        }

    }
} catch (err) {
    res.status(500).json({
        message: "Some server error",
        error: err
    })
}

try {
    postControllers.showOne = async (req, res, next) => {
        const id = req.params.id;
        const post = await Post.findOne({ where: { id: id } });
        if (post === null) {
            res.status(500).json({
                message: "Post not found!!"
            });
        } else {
            res.status(200).json(post);
        }
    }
} catch (err) {
    res.status(500).json({
        message: "Some server error!!",
        error: err
    })
}

try {
    postControllers.update = async (req, res, next) => {
        let upData = {
            title: req.body.title,
            content: req.body.content
        }
        const id = req.params.id;
        const postUpdate = await Post.update(upData, { where: { id: id } });
        if (!postUpdate) {
            return res.status(404).json({
                message: "post not found!!"
            });
        } else {
            return res.status(201).json(postUpdate)
        }
    }
} catch (err) {
    return res.status(500).json({
        message: "Some internal server error!!"
    })
}

try {
    postControllers.delete = async (req, res, next) => {
        const id = req.params.id;
        const postUpdate = await Post.destroy({ where: { id: id } });
        if (!postUpdate) {
            return res.status(404).json({
                message: "post not found!!"
            });
        } else {
            return res.status(200).json("post deleted successfully")
        }
    }

} catch (err) {
    return res.status(500).json({
        message: "server error!!"
    });
}

module.exports = postControllers;