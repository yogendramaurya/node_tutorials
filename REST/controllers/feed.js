const { validationResult } = require('express-validator/check');

exports.getPosts = (req, res,  next) => {
    res.status(200).json({
        posts:[{title:'firstpost', content:'sadfsa asfdsafsf'}]
    });
}

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({
            message:"validation failed, entered data is incorrect !",
            errors:errors.array()
        });
    }
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({
        message:'post created successfully!',
        post:{id : new Date().toISOString , title: title, content: content}
    });
}