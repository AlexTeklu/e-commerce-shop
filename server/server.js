import express from 'express';
import connectDatabase from './config/mongoDB.js';
// import userRoute from './router/UserRoute.js';
import authRoute from './router/Auth.js';
import dotenv from 'dotenv';



dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use('/users', authRoute);
app.use('/users', authRoute);
// app.use('/users', userRoute);
// app.use('/product', productRoute);

const PORT = process.env.PORT || 5151;

app.listen(PORT, console.log(`server run in port ${PORT}`));
