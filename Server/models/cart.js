const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    title: String,
    image: String,
    price:Number,
    selectedSize: String,
    selectedColor: String,
    count: Number
})

const Cart = mongoose.model('Cart' , cartSchema);
module.exports = Cart