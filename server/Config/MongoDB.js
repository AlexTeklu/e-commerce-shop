 import mongoose from "mongoose";
//  const mongoose = require("mongoose");
const connectDatabase = async ()=>{
    try{
      const connection = await mongoose.connect(process.env.MONGO_URL, {
         
    })
    console.log("Mongo db connected")
    }catch (error){
        console.log(`Error:${error.message}`)
        process.exit(1)
    }
}

  export default connectDatabase;

