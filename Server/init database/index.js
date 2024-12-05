const express = require('express');
const mongoose = require('mongoose');
const app = express();
const data = require('./data.js')


app.use(express.json());

main().then(console.log('database connected'))
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://as03489822:prWMeyMYkoRMJjK8@cluster0.le0hn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

}

let productSchema = new mongoose.Schema({
  image: String,
  title: String,
  description: String,
  rating: Number,
  oldPrice: Number,
  newPrice: Number,
  sale: Boolean
})

let Product = mongoose.model('Products' , productSchema);

let saveData = async() => {
  
  await Product.deleteMany({});
 console.log('deleted')
  await Product.insertMany(data.products);
  console.log("data save");
}
saveData()
app.listen("8090" , () =>{
    console.log("server connected on port 8080")
})

