const mongooes = require('mongoose');
const Schema = mongooes.Schema;

const postSchema  =  new Schema({
    title : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required: true
    },
    content: {
        type: String,
        required : true
    }
}, {timestamps:true}); 


module.exports = mongooes.model('Post');