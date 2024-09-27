import express from 'express';
import {  getCurrentUser, login, logout, signup, updateProfile, verifyEmail } from '../controller/auth.js';
import upload from '../config/multer.js';
import checkAuthentication from '../middleware/checkAuthentication.js';

const router = express.Router()

router.route("/signup").post(upload,signup)

router.route("/login").post(login)

router.route("/verify-email").post(verifyEmail)

router.route('/logout').get(logout)

router.route("/update-profile").put(checkAuthentication,upload,updateProfile)

router.route("/getCurrentUser").get(checkAuthentication,getCurrentUser)

export default router