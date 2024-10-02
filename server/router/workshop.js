import express from "express"
import checkAuthentication from "../middleware/checkAuthentication.js"
import { bookWorkshop, cancelBooking, createWorkshop, deleteWorkshop, getBookingsByUserId, getWorkshopById, getWorkshops, updateWorkshop } from "../controller/workshop.js"
import upload from "../config/multer.js"

const router = express.Router()

router.route("/create-workshop").post(checkAuthentication,upload,createWorkshop)

router.route("/update-workshop/:id").put(checkAuthentication,upload,updateWorkshop)

router.route("/delete-workshop/:id").delete(checkAuthentication,deleteWorkshop)

router.route("/get-workshops").get(checkAuthentication,getWorkshops)

router.route("/get-workshop/:id").get(checkAuthentication,getWorkshopById)

router.route("/book-workshop/:id").post(checkAuthentication,bookWorkshop)

router.route("/cancel-workshop/:id").delete(checkAuthentication,cancelBooking)

router.route("/get-my-workshops").get(checkAuthentication,getBookingsByUserId)

export default router