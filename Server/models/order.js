const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let orderSchema = new Schema({
    // cart: Array,
    contact: String,
    country: String,
    firstname: String,
    lastname: String,
    address: String,
    city: String,
    postalcode: Number,
    number: Number,
    payment: String,
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

let Order = mongoose.model('Order' , orderSchema);

module.exports = Order;