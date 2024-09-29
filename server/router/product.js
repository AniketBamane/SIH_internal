import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';
import { createProduct, deleteProduct, getAllProducts, getProductById, getProductOParticularSite, getProducts, updateProduct } from '../controller/product.js';
import upload from '../config/multer.js';

const router = express.Router()

router.route("/create-product").post(checkAuthentication,upload,createProduct)

router.route("/get-products").get(checkAuthentication,getProducts)

router.route("/update-product/:id").put(checkAuthentication,upload,updateProduct)

router.route("/delete-product/:id").delete(checkAuthentication,deleteProduct)

router.route("/get-product/:id").get(checkAuthentication,getProductById)

router.route("/get-all-products").get(checkAuthentication,getAllProducts)

router.route("/get-product-by-siteid/:id").get(checkAuthentication,getProductOParticularSite)

export default router;
