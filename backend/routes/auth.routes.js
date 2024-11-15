import express from "express";
import {
    registerUser,
    loginUser
} from "../controlles/auth.controller.js"

const router = express.Router()

//registering user route

router.post("/register",registerUser)

//login user route

router.post("/login",loginUser)

export default router