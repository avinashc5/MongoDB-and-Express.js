// index.js is used to connect to the database and then start the server. It also includes all the general stuff of express.js and mongoose.js

const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoutes = require('./routes/product.route');


mongoose.connect("mongodb+srv://avinashc5:hsanivA_5605@cluster0.mha7gg2.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
	console.log("Connected to database!");
	app.listen(3000, () => {
	console.log('Server is running on port 3000')
})
})
.catch(() => {
	console.log("Connection failed!")
})


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/api/products', productRoutes)