// import express from "express";
// const router = express.Router();
// import Users from "../models/User.js";
// // import VerifyToken from "./VerifyToken.js";
// import  { veryfiyToke, verifyTokenAndAuthorization}   from "./VerifyToken.js";


const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./VerifyToken");
const Users = require ("../models/User")
const router = require("express").Router();



router.patch("/:id",  verifyTokenAndAuthorization, async (req, res) =>{
      if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC,
            ).toString();
      
        }

      try{
        const updatedUser = await Users.findByIdAndUpdate(
            req.params.id, 
            {
            $set: req.body
        },
        {new: true},
        )
        res.status(200).json(updatedUser);

      }catch(err){
          res.status(500).json(err)
        }
});



//DELET

router.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
  try {
    await Users.findByIdAndDelete(req.params.id)
    res.status(200).json("user has been deleted....")
  } catch (error) {
    res.status(500).json(error)
  }
})


/////GET
router.get("/find/:id", verifyTokenAndAdmin, async(req, res)=>{
  try {
   const user = await Users.findById(req.params.id);
   const {password, ...others} = user._doc;

   res.status(200).json({others});

   
  } catch (error) {
    res.status(500).json(error)
  }
})
/////GET all users
router.get("/", verifyTokenAndAdmin, async(req, res)=>{
  const query = req.query.new
  const users = query ? await Users.find().sort({_id: -1}).limit(1)
  : await Users.find()
  try {
   const users = await Users.find();
    res.status(200).json({users});

     } catch (error) {
    res.status(500).json(error)
  }
})

//Get user stats

router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json(err);
  }
});


 module.exports = router
// export default router;