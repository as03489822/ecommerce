const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    username: String,
    rating: Number,
    message: String,
    createdAt: {type: Date, default: Date.now},
})

const Review = mongoose.model('Review' , reviewSchema);

module.exports = Review;