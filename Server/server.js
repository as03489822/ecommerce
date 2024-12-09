require('dotenv').config()
const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose');
const Product = require('./models/product.js');
const Review = require('./models/review.js');
const Cart = require('./models/cart.js');
const User = require('./models/user.js');
const Order = require('./models/order.js')
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const authenticate = require('./authenticateToken.js');

console.log()
const app = express();

app.use(cors({
  origin: 'https://ecommerce-elz5.vercel.app'
}));
app.use(express.json());
app.use(cookieParser())

main().then(console.log('database connected')).catch(err => console.log(err));
 
async function main() {
  await mongoose.connect(process.env.MONGODB_ATLAS);

}
 
app.get('/' , (req , res) => {
  res.send('hello')
})

app.get('/products'  , async(req , res) => {
  let products = await Product.find();
  res.json(products)
})

app.get('/product/detail/:id' , async(req , res) => {
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

app.post('/cart' ,authenticate ,async(req , res) => {
  let user = await User.findById(req.user.id);
  let newCartProduct = new Cart(req.body);
  user.cartProducts.push(newCartProduct)

  await user.save();
  await newCartProduct.save()
  res.json({ message:'product add to the cart'});
})

app.get('/cart' ,authenticate , async(req , res) => {

  const user = await User.findById(req.user.id).populate('cartProducts');
  console.log(user)

  
  res.json(user.cartProducts);
})

app.delete('/cart/:id', async(req ,res)=>{
  let {id} = req.params;
  await Cart.findByIdAndDelete(id);
  res.status(200).json({ message: 'Item removed successfully'});
})

app.post('/signup' , async(req , res) =>{
  try{
    let {username, email, password} = req.body;

    let existingUser =await User.findOne({email});
    if(existingUser){
      return res.status(401).json({message : 'Email already exist'})
    }

    const saltRounds = 10;
    let hashPassword = await bcryptjs.hash(password ,saltRounds );
    let newUser = new User({
      username,
      email,
      password: hashPassword
    })
    await newUser.save();

    let token = jwt.sign({id:newUser._id , email:newUser.email} , process.env.JWT_SECURE , {expiresIn : '1h'});
    res.cookie('token', token, {
    httpOnly:true,
    secure:process.env.COOKIE_SECURE,
    maxAge:3600000      
    })
    console.log(res.cookie.token)
    res.status(201).json({message:'SignUp Successfully'});
  }catch(err){
    console.log(err)
  }
})


app.post('/login' , async(req , res)=>{
    let {email , password} = req.body;

    let user = await User.findOne({email});
    if(!user){
      return res.status(401).json({message:'email is incorrect', type:'email'})
    }
    
    let mached = await bcryptjs.compare(password, user.password);
    if(!mached){
      return res.status(401).json({message:'password is incorrect', type:'password' })
    }

    let token = jwt.sign({id:user._id, email: user.email} , process.env.JWT_SECURE , {expiresIn : '1h'});
    res.cookie('token', token, {
      httpOnly:true,
      secure: process.env.COOKIE_SECURE,
    sameSite: 'strict',
      maxAge: 3600000
    })
    res.status(201).json({message: 'login successful' ,token})
})

app.post('/logout', async(req , res)=>{
  res.clearCookie('token', {
    httpOnly: true,
    secure: 'key',
    sameSite:'strict'
  })
  res.json({ message :' account logout'})
})


app.post('/order' ,authenticate ,async(req ,res) =>{
try{
  let data = req.body;
  let user= await User.findById(req.user.id);

  let newOrder = new Order(data);
   newOrder.user = user;
  await newOrder.save();
  // console.log(newOrder)

  user.cartProducts=[];
  await user.save();
  
  res.status(201).json({message : 'order placed' })}
  catch(err){
  // res.status(401).json({message:'error'})
  console.log(err)
}
})
app.listen("8080" , () =>{
    console.log("server connected on port 8080")
})