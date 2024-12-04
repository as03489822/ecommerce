const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema= new Schema({
    username: String,
    email: String,
    password: String,
    cartProducts:[{
        type: Schema.Types.ObjectId,
        ref:'Cart'
    }]
})

let User = mongoose.model('User' , userSchema);

module.exports = User