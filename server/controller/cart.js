import Product from "../model/product.js"
import User from "../model/user.js"

export const addItemIntoCart = async(req,res,next)=>{
  try{
    const {productId} = req.body
    const user = req.user;
    const product = await Product.findById(productId);
    if(!product) return res.status(404).json({message: "Product not found"});
    const currentUser = await User.findById(user.id).populate("cart.products.product");
    if(currentUser.cart.products.some(object=> object.product._id.equals(productId))){
      return res.status(400).json({message: "Item already exists in cart"});
    }
    currentUser.cart.products.push({product:product._id,quantity:1})
    currentUser.cart.totalPrice += product.price;
    await currentUser.save();
    const newUser = await User.findById(user.id).populate("cart.products.product")
    return res.status(201).json({message: "Item added to cart",cart:newUser.cart});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}


export const removeItemFromCart = async(req, res, next) => {
  try{
    const { productId } = req.body;
    const user = req.user;
    const product = await Product.findById(productId);
    const currentUser = await User.findById(user.id);
    const productIndex = currentUser.cart.products.findIndex((product) => product.product.toString() === productId.toString());
    if(productIndex === -1) {
      return res.status(404).json({message: "product not found in cart"});
    } else {
      currentUser.cart.products.splice(productIndex, 1);
      currentUser.cart.totalPrice -= product.price;
      await currentUser.save();
      const newUser = await User.findById(currentUser._id).populate("cart.products.product")
      return res.status(200).json({message: "Item removed from cart",cart:newUser.cart});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
  }


  export const  increaseQuantityOfDishInCart = async(req,res)=>{
    try{
      console.log("--------------increaseQuantityOfDishInCart")
      const {productId,quantity} = req.body
      const user = req.user;
      const currentUser = await User.findById(user.id);
      const product = await Product.findById(productId);
      if(!product) return res.status(404).json({message: "product not found"});
      const productIndex = currentUser.cart.products.findIndex((product) => product.product._id.toString() === productId.toString());
      if(productIndex === -1) {
        return res.status(404).json({message: "product not found in cart"});
      } else{
        const previousQuantity = currentUser.cart.products[productIndex].quantity
        currentUser.cart.products[productIndex].quantity = quantity
        currentUser.cart.totalPrice -= previousQuantity * product.price;
        currentUser.cart.totalPrice += quantity * product.price;
        await currentUser.save();
        const newUser = await User.findById(currentUser._id).populate("cart.products.product")
        return res.status(200).json({message: "Quantity increased for product ",cart:newUser.cart});
      }
    }catch(err){
      res.status(500).json({message: err.message});
    }
  }


  export const decreaseQuantityOfDishInCart = async(req,res,next)=>{
    try{
      const {productId,quantity} = req.body
      const user = req.user;
      const currentUser = await User.findById(user.id);
      const product = await Product.findById(productId);
      if(!product) return res.status(404).json({message: "product not found"});
      const productIndex = currentUser.cart.products.findIndex((product) => product.product.toString() === productId.toString());
      if(productIndex === -1) {
        return res.status(404).json({message: "product not found in cart"});
      } else if(currentUser.cart.products[productIndex].quantity < quantity){
        return res.status(400).json({message: "Quantity cannot be decreased further"});
      } else{
        const previousQuantity = currentUser.cart.products[productIndex].quantity
        currentUser.cart.products[productIndex].quantity = quantity
        currentUser.cart.totalPrice -= (previousQuantity - quantity) * product.price;
        await currentUser.save();
        const newUser = await User.findById(currentUser._id).populate("cart.products.product")
        return res.status(200).json({message: "Quantity decreased for product ",cart: newUser.cart})
      }
    }catch(err){
      res.status(500).json({message: err.message});
    }
  }

  export const deleteCart = async(req,res,next)=>{
    try{
      const user = req.user;
      const currentUser = await User.findById(user.id);
      currentUser.cart.products = []
      currentUser.cart.totalPrice = 0
      await currentUser.save();
      return res.status(200).json({message: "Cart deleted successfully"});
    }catch(err){
      res.status(500).json({message: err.message});
    }
  }