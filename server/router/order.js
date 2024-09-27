import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';
import { createOrder, deleteOrder, getOrders, updateOrder } from '../controller/order.js';

const router = express.Router()

router.route("/create-order").post(checkAuthentication,createOrder)

router.route("/delete-order/:id").delete(checkAuthentication,deleteOrder)

router.route("/update-order/:id").put(checkAuthentication,updateOrder)

router.route("/get-orders").get(checkAuthentication,getOrders)

export default router;
