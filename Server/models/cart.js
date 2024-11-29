const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    id: String,
    image: String,
    title: String,
    price:Number,
    selectedSize: String,
    selectedColor: String,
    count: Number
})

module.exports = mongoose.model('Cart' , cartSchema)