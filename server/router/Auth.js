import express from 'express';
import Users from '../models/User.js';
import CryptoJS from 'crypto-js';
// import jwt from 'jsonwebtoken';

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
		const user = await Users.findOne({
			username: req.body.username,
			
		});
		

		if (user) {
			const hashedPassword = CryptoJS.AES.decrypt(
				user.password,
				process.env.PASS_SEC
			);
			const { password, ...others } = user._doc;
			const definedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
			definedPassword === req.body.password;

			if (definedPassword === req.body.password) {
				return res.status(200).json({ ...others });
			} else {
				return res.status(401).json('Incorrect password');
			}
		} else {
			return res.status(401).json('User not found');
		}
	} catch (error) {
		res.status(500).json(error);
	}
}

// async function userLogin(req, res) {
// 	try {
// 		const user = await Users.findOne({
// 			 username: req.body.username,

// 		});
// 		 !user && res.status(401).json('Wrong credentials');

// 		const hashedPassword = CryptoJS.AES.decrypt(
// 			user.password,
// 			process.env.PASS_SEC
// 		);

// 		const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
// 		OriginalPassword !== req.body.password &&
// 	 	res.status(401).json('wrong Credentials');

// const accessToken = jwt.sign(
// 	{
// 		id: user._id,
// 		isAdmin: user.isAdmin,
// 	},
// 	process.env.JWT_SEC,
// 	{ expiresIn: '3d' }
// );

// const { password, ...others } = user._doc;

// res.status(200).json({ ...others, accessToken });
// 	} catch (e) {
// 		res.status(500).json(e);
// 	}
// }

authRouter.post('/', registerUser);
authRouter.post('/login', userLogin);
export default authRouter;
