const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todoSchema=new Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Todo', todoSchema);