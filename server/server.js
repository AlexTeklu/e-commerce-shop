import express from 'express';
import connectDatabase from './config/mongoDB.js';
import dotenv from 'dotenv';
import authRouter from './router/Auth.js';
 import userRoute from './router/UserRouter.js';


dotenv.config();
connectDatabase();

const app = express();
app.use(express.json());
app.use('/users', authRouter);
app.use('/users', userRoute);
// app.use('/product', productRoute);

const PORT = process.env.PORT || 5151;

app.listen(PORT, console.log(`server run in port ${PORT}`));
