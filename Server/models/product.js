const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let productSchema = new Schema({
    image: String,
    title: String,
    description: String,
    rating: Number,
    oldPrice: Number,
    newPrice: Number,
    sale: Boolean,
    reviews: [{
      type: Schema.Types.ObjectId,
      ref: 'Review'
    }]
  })
  
  let Product = mongoose.model('Products' , productSchema);
  
  module.exports = Product;