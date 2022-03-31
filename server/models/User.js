 //import mongoose from "mongoose";
 const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema (
    {
      name: {type: String, required: true, unique: true},
      email: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      isAdmin: { 
        type: Boolean, 
        default: false },
    },
    { timestamps: true }
   );
  
  //  const Users = mongoose.model("User", UserSchema);
  //  export default Users;
   module.exports = mongoose.model("Users", UserSchema)