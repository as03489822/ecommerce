const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const Review = require('./models/review.js');

const app = express();

app.use(cors());
app.use(express.json());

main().then(console.log('database connected')).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/E-Commerce');

}

app.get('/products' , async(req , res) => {
  let products = await Product.find();
  res.json(products)
})

app.get('/product/:id' , async(req , res) => {
  const productId = req.params.id;
  const details = await Product.findById(productId).populate('reviews');
  res.json(details) 
})

app.post('/product/:id/review' , async(req , res) => {
  
  const details = await Product.findById(req.params.id);
  const newReview = new Review(req.body)
  details.reviews.push(newReview);
   
  await details.save();
  await newReview.save();
  res.json({})
})

app.post ('/shop/filter' , async(req , res) => {
  let {minPrice , maxPrice} = req.body;
  console.log(req.body);
  let filteredProduct =await Product.find({
    oldPrice: { $gte: minPrice, $lte: maxPrice },
    newPrice: { $gte: minPrice, $lte: maxPrice }
  })
  console.log(filteredProduct)
  res.json(filteredProduct)
})

app.listen("8080" , () =>{
    console.log("server connected on port 8080")
})