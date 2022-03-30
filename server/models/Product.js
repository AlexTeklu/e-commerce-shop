import mongoose from "mongoose";


const ProductSchema = new mongoose.schema(
    {
      title: { type: String, required: true, unique: true },
      desc: {type: String, required: true},
      img: {type: String, required: true},
      catagories: {type: Array},
      color: {type: String},
      size: {type: String},
      price: {type: Number, required: true},
    },
    { timestamps: true }
  );
  
  const Product = mongoose.model("Product", ProductSchema);
  export default Product;