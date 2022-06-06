import express from 'express';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';
import Users from '../models/User.js';

const authRouter = express.Router();

///////////////////registering user///////////////

async function registerUser(req, res) {
	try {
		const newUser = await Users.create({
			username: req.body.username,
			email: req.body.email,
			password: CryptoJS.AES.encrypt(
				req.body.password,
				process.env.PASS_SEC
			).toString(),
		});

		res.status(200).json({
			status: 'success',
			data: {
				user: newUser,
			},
		});
	} catch (err) {
		console.log('Something went wrong creating a user', err.message);
		res.sendStatus(500);
	}
}

///login

async function userLogin(req, res) {
	try {
		const user = await Users.findOne({ username: req.body.username });
		
if(user){
	const hashedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASS_SEC);

	const {password, ...other} = user._doc
	const definedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

	if(definedPassword === req.body.password){
		const accesToken =jwt.sign(
			{
				id: user._doc,
				isAdmin: user.isAdmin,
			},
			process.env.JWT_SEC,
			{expiresIn: "3d"}
		)
		return res.status(200).json({...other, accesToken});
	}else{
		return res.status(401).json('incorrect password')
	}
		
}else{
	return res.status(401).json('user not found');
}	
		

		
	} catch (error) {
		res.status(500).json(error);
	}
}

authRouter.post('/', registerUser);
authRouter.post('/login', userLogin);
export default authRouter;


