const mongoose = require('mongoose')
const schema =  mongoose.Schema;
const PostSchema = new schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        
    }
}, {timestamps: true})
const post= mongoose.model('Post', PostSchema)
module.exports = post


