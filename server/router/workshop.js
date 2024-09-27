import express from "express"
import checkAuthentication from "../middleware/checkAuthentication.js"
import { createWorkshop, deleteWorkshop, getWorkshopById, getWorkshops, updateWorkshop } from "../controller/workshop.js"
import upload from "../config/multer.js"

const router = express.Router()

router.route("/create-workshop").post(checkAuthentication,upload,createWorkshop)

router.route("/update-workshop/:id").put(checkAuthentication,upload,updateWorkshop)

router.route("/delete-workshop/:id").delete(checkAuthentication,deleteWorkshop)

router.route("/get-workshops").get(checkAuthentication,getWorkshops)

router.route("/get-workshop/:id").get(checkAuthentication,getWorkshopById)

export default router