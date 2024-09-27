import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controller/product.js';
import upload from '../config/multer.js';

const router = express.Router()

router.route("/create-product").post(checkAuthentication,upload,createProduct)

router.route("/get-products").get(checkAuthentication,getProducts)

router.route("/update-product/:id").put(checkAuthentication,upload,updateProduct)

router.route("/delete-product/:id").delete(checkAuthentication,deleteProduct)

router.route("/get-product/:id").get(checkAuthentication,getProductById)

export default router;
