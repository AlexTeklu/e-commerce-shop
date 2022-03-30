import mongoose from "mongoose";

const OrderSchema = new mongoose.schema(
    {
        userId:{type: String,required: true,},
        products:[
        {
            productId:{type: String}, 
            quantity:{type: Number, defualt: 1},                            
            
        }
    ],

    amount:{type: Number, required:true},  
    address:{type: Object, required: true}, 
    status:{type: String, default: "pending"},   
       
     
    }, {timestamps: true}
);

export default OrderSchema;