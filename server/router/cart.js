import express from 'express';
import checkAuthentication from '../middleware/checkAuthentication.js';
import { addItemIntoCart, decreaseQuantityOfDishInCart, deleteCart, increaseQuantityOfDishInCart, removeItemFromCart } from '../controller/cart.js';

const router = express.Router()

router.route("/add-item-cart").post(checkAuthentication,addItemIntoCart)

router.route("/remove-item-cart").delete(checkAuthentication,removeItemFromCart)

router.route("/increase-quantity-cart").put(checkAuthentication,increaseQuantityOfDishInCart)

router.route("/decrease-quantity-cart").put(checkAuthentication,decreaseQuantityOfDishInCart)

router.route("/delete-cart").delete(checkAuthentication,deleteCart)

export default router;