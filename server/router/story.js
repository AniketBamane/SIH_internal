import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';
import { createStory, deleteStory, getAllStories, getStoryById, updateStory } from '../controller/story.js';
import upload from '../config/multer.js';

const router = express.Router()

router.route("/create-story").post(checkAuthentication,upload,createStory)

router.route("/get-stories").get(checkAuthentication,getAllStories)

router.route("/delete-story/:id").delete(checkAuthentication,deleteStory)

router.route("/update-story/:id").put(checkAuthentication,upload,updateStory)

router.route("/get-story/:id").get(checkAuthentication,getStoryById)

export default router