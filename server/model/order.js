import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalAmount: { type: Number, required: true },
  products: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number, default: 1 }
  }],
  payment:{
    type:String,
    enum:['pending',"completed","Cancelled"],
    default: "pending"
  },
  deliveryDate: { 
    type: Date, 
    default: () => Date.now() + 24*60*60*1000 
  },
  deliveryAddress:{
    street: String,
    city: String,
    state: String,
    pincode: String,
    building:String,
    landmark: String,
    country: String
  },
  status: { type: String, enum: ['pending', 'in-delivery', 'delivered'], default: 'pending' },
},{
  timestamps:true
});


const Order = mongoose.models.orders || mongoose.model("Order",OrderSchema)

export default Order;