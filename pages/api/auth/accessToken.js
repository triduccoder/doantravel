import connectDB from "../../../utils/connectDB";
import jwt from 'jsonwebtoken'
import Users from "../../../models/userModel";
import bcrypt from 'bcrypt'
import {createAccessToken, createRefreshToken} from "../../../utils//generateToken";
connectDB()


export default async (req, res) => {
	try{
		const rf_token = req.cookies.refreshtoken;
		if(!rf_token) return res.status(400).json({err: 'please login now!!'})

		const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET)
		if(!result) return res.status(400).json({err: 'Your token is incorrect or expired.'})

		const user = await Users.findById(result.id);
		if(!user) return res.status(400).json({err: 'User does not exists'})

		const access_token = createAccessToken({id: user._id})
		res.json({
			access_token,
			user: {
				name: user.name,
				email: user.email,
				role: user.role,
				avatar: user.avatar,
				root: user.root,
			}
		})
	}catch(err){
		return res.status(500).json({err: err.message})
	}
}