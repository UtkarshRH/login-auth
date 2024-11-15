import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js"

const registerUser = async (req, res) =>{
    const { name, email, password } = req.body;

    try {
        const existUser = await User.findOne({email})
    
        if (existUser) {
            return res.status(400).json({message:"User already exists"})
        }
        //create the user 
        const user = new User({name,email,password});

        await user.save();
        res
        status(200)
        .json({message:"User created successully"})
    } catch (error) {
        console.error(`Error registering the user`)
        res.status(500).json({message:"Server Error"})
    }
};

const loginUser = async (req, res) =>{
    const { email, password } = req.body;

    try {
        const user = await User.findOne(email)
        if (!user) {
            return res.status(404).json({message:"User not found"})
        }
    
        //compare the password
        const isMatch = await bcrypt.compare(password, user.password)
    
        if (!isMatch) {
            return res.status(400).json({message:"password not match!"})
        }

        //create JWT token 
        const token = jwt.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"1h"})

        res.status(200).json({token});
    } catch (error) {
        console.error("Error logging in user: ", error)
        res.status(500).json({message:"server error"})
    }
}

export {
    registerUser,
    loginUser
}