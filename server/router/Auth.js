 import express from "express"; //this should be deleted if error occured
import Users from "../models/User.js";

import CryptoJS from "crypto-js";
import  jwt  from "jsonwebtoken";






 const router = express.Router();

// /////register
router.post("/register", async (req, res)=>{
    const newUser = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    
});

    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(error){
        res.status(500).json(error);
    }
   
 });


////LOGIN
// router.post("/login", async (req, res) => {
//     try {
//       const user = await Users.findOne({ username: req.body.username });
//       !user && res.status(401).json("Wrong credentials!");
  
//       const hashedPassword = CryptoJS.AES.decrypt(
//         user.password,
//         process.env.PASS_SEC
//       );
//       const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
  
//       OriginalPassword !== req.body.password &&
//         res.status(401).json("Wrong credentials!");
  
//       const accessToken = jwt.sign(
//         {
//           id: user._id,
//           isAdmin: user.isAdmin,
//         },
//         process.env.JWT_SEC,
//         {expiresIn:"3d"}
//       );
  
//       const { password, ...others } = user._doc;
  
//       res.status(200).json({...others, accessToken});
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  


 export default router;