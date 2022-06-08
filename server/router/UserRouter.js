

import express from 'express';
import Users from '../models/User.js';
import { verifyToken, 
    verifyTokenAndAuthorization, verifyTokenAdmin
     } from './VerifyToken.js'

const userRoute = express.Router();


userRoute.put("/:id",  verifyTokenAndAuthorization, async(req, res) => {

	if (req.body.password) {
				req.body.password = CryptoJS.AES.encrypt(
					req.body.password,
					process.env.PASS_SEC
				).toString();
			}
		
			try {
				const updatedUser = await Users.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body
					},
					{ new: true }
				);
			return res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
});

/////////////////DELETING USER///////////////////
userRoute.delete("/:id", verifyTokenAndAuthorization, async(req, res)=>{
	try {
		await Users.findByIdAndDelete(req.params.id)
		res.status(200).json("user is deleted....")
	} catch (err) {
		res.status(500).json(err);
	}

});



/////////////////FINDING A USER AS AN ADMIN//////////////////
userRoute.get("/find/:id", verifyTokenAdmin, async(req, res)=>{
	try {
		const user = await Users.findById(req.params.id);
		const {password, ...other} = user._doc;
		res.status(200).json(other)
	} catch (err) {
		res.status(500).json(err);
	}

});

/////////////////GET ALL USERS//////////////////
userRoute.get("/", verifyTokenAdmin, async (req, res)=>{
    const query = req.query.new;
	try {
		const users = query ? await Users.find().sort({ _id: -1 }).limit(3) : await Users.find();	
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json(err);
	};

});

///////////////getUser Status

userRoute.get("/stats", verifyTokenAdmin, async(req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(datte.getFullYear() - 1));

    try {
        const data = await Users.aggregate([
            {$match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month:{ $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status().json(data);
        
    } catch (err) {
        res.status(500).json(err)
        
    }
});


 export default userRoute;
