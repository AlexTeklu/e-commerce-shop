

import express from 'express';
import Users from '../models/User.js';
import { verifyToken, verifyTokenAndAuthorization } from '../router/VerifyToken.js';
const userRoute = express.Router();

userRoute.put("/:id", verifyTokenAndAuthorization, async(req, res) => {

	if (req.body.password) {
				req.body.password = CryptoJS.AES.encrypt(
					req.body.password,
					process.env.PASS_SEC
				).toString();
			};
		
			try {
				const updatedUser = await Users.findByIdAndUpdate(
					req.params.id,
					{
						$set: req.body,
					},
					{ new: true }
				);
			return res.status(200).json(updatedUser);
			} catch (err) {
				res.status(500).json(err);
			}
});


export default userRoute
