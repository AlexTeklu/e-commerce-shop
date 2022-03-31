//  import express from "express";
// import Users from "../models/User.js";
// import CryptoJS from "crypto-js";
// import jwt from "jsonwebtoken";

// const router = express.Router();

const router = require("express").Router()
const Users = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post("/registers", async (req, res)=> {
    const newUser = new Users({
        name: req.body.name,
        email: req.body.email,
        password: CryptoJS.AES.encrypt (
            req.body.password, process.env.PASS_SEC,).toString(),
    })


    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser);
    } catch (err) {
        res.status(500).json({msg:"eror"});
    }
   

});


///login

router.post("/login", async (req, res)=>{
    try{
        const user = await Users.findOne({
            name: req.body.name,
         });
        !user && res.status(401).json("Wrong credentials")

        const hashedPassword = CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC,
            );

        const OriginalPassword = hashedPassword.toString(
            CryptoJS.enc.Utf8,
            )
            OriginalPassword !== req.body.password && 
            res.status(401).json("wrong Credentials")

            const accessToken = jwt.sign({
                id: user._id,
                isAdmin: user.isAdmin,
            }, 
            process.env.JWT_SEC,
            {expiresIn: "3d"}
            );

            const {password, ...others} = user._doc;

            res.status(200).json({...others, accessToken})

    } catch(e){
        res.status(500).json(e)
    }
})

 module.exports = router
//   export default router;