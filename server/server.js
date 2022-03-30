import express from 'express';
import connectDatabase from "./config/mongoDB.js";
import userRoute from "./router/UserRoute.js";
import authRoute from "./router/Auth.js";
import dotenv  from "dotenv";


dotenv.config();
connectDatabase();




const app = express();
app.use(express.json());



app.use("/auth", authRoute);
app.use("/login", authRoute);
app.use("/users", userRoute);


// app.get('/', (req, res)=>{
//     res.json({msg: 'well come to my shop'})
// })


const PORT = process.env.PORT || 5151;

app.listen(PORT, console.log(`server run in port ${PORT}`));