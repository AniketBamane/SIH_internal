import Order from "../model/order.js";
import User from "../model/user.js"

export const createOrder = async(req, res, next) => {
  try{
    const user = req.user
    const currentUser = await User.findById(user.id)
    const order = await Order.create({
      customerId:user.id,
      products:currentUser.cart.products,
      deliveryAddress:currentUser.address,
      totalAmount: currentUser.cart.totalPrice,
    });
    await order.save()
    currentUser.cart.products = []
    currentUser.cart.totalPrice = 0
    await currentUser.save()
    const CreatedOrder = await Order.findById(order._id).populate("products.product")
    console.log(CreatedOrder,"-----------------------")
    res.status(201).json({
      message: "Order created successfully",
      order:CreatedOrder,
    });
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


export const getOrders = async(req, res, next) => {
  try{
    const user = req.user
    if(!user){
      return res.status(401).json({message: "Unauthorized"})
    }
    const orders = await Order.find({customerId: user.id}).populate("products.product")
    if(orders){
      console.log(orders,"-----------------------")
      res.status(200).json({orders})
    }else{
      res.status(404).json({message: "No orders found"})
    }
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


export const deleteOrder = async(req, res, next) => {
  try{
    const orderId = req.params.id
    const user = req.user
    if(!orderId ||!user){
      return res.status(400).json({message: "Invalid order or user"})
    }
    const order = await Order.findById(orderId)
    if(!order || order.customerId.toString()!== user.id){
      return res.status(403).json({message: "Unauthorized to delete this order"})
    }
    await Order.findByIdAndDelete(orderId)
    res.status(200).json({message: "Order deleted successfully"})
  }catch(err){
    res.status(500).json({message:err.message});
  }
}

export const updateOrder = async(req, res, next) => {
  try{
    const orderId = req.params.id
    const user = req.user.id
    if(!orderId ||!user){
      return res.status(400).json({message: "Invalid order or user"})
    }
    const order = await Order.findByIdAndUpdate(orderId, req.body, {new: true}).populate("products.product")
    if(order){
      res.status(200).json({message: "Order updated successfully", order})
    }else{
      res.status(404).json({message: "Order not found"})
    }
  }catch(err){
    res.status(500).json({message:err.message});
  }
}


