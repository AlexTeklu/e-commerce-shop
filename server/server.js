// import express from 'express';
// import connectDatabase from './config/mongoDB.js';
// import userRoute from './router/UserRoute.js';
// import authRoute from './router/Auth.js';
// import dotenv from 'dotenv';

 const express = require("express")

// const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./router/UserRoute");
const authRoute = require("./router/Auth");
const connectDatabase = require("./Config/MongoDB");
const productRoute = require("./router/ProductRoute")
// const cartRoute = require("./routes/cart")
// const orderRoute = require("./routes/order")
// const stripeRoute = require("./routes/order")

dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/product', productRoute);

const PORT = process.env.PORT || 5151;

app.listen(PORT, console.log(`server run in port ${PORT}`));
