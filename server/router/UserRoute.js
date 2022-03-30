import express from "express";
const router = express.Router();
import Users from "../models/User.js";
// import VerifyToken from "./VerifyToken.js";
// import  verifyTokenAndAuthorization   from "./VerifyToken.js";


// // const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./VerifyToken");
// // const Users = require ("../models/User")
// // const router = require("express").Router();



// router.put("/:id",  verifyTokenAndAuthorization, async (req, res) =>{
//       if (req.body.password) {
//         req.body.password = CryptoJS.AES.encrypt(
//             req.body.password,
//             process.env.PASS_SEC,
//             ).toString()
      
//         }

//       try{
//         const updatedUser = await Users.findByIdAndUpdate(
//             req.params.id, 
//             {
//             $set: req.body
//         },
//         {new: true},
//         )
//         res.status(200).json(updatedUser);

//       }catch(err){
//           res.status(500).json(err)
//         }
// });



////DELET

// router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
//   try {
//     await Users.findByIdAndDelete(req.params.id)
//     res.status(200).json("user has been deleted....")
//   } catch (error) {
//     res.status(500).json(error)
//   }
// })


// /////GET
// router.get("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
//   try {
//    const user = await Users.findById(req.params.id);
//    const {password, ...others} = user._doc;

//    res.status(200).json({others});

   
//   } catch (error) {
//     res.status(500).json(error)
//   }
// })


// module.exports = router
export default router;