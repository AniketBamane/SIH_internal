import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['artisan', 'customer', 'admin'], required: true },
  bio: String,  
  profilePic: String, 
  address:{
    street: String,
    city: String,
    state: String,
    pincode: String,
    building:String,
    landmark: String,
    country: String
  },
  cart:{
    products: [{
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: { type: Number, default: 1 }
    }],
    totalPrice: { type: Number, default: 0 }
  }
},{
  timestamps:true
});

userSchema.pre('save',async function(next){
  const user = this;
  if(!user.isModified('password')){
    return next();
  }
  const salt = await bcrypt.genSalt(10)
  const password =await bcrypt.hash(user.password,salt)
  user.password = password;
  next();
})

userSchema.methods.generateToken = async function() {
  const user = this;
  const token =await jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d'});
  return token;
}

userSchema.methods.comparePassword = async function(password) {
  const user = this;
  const isMatch = await bcrypt.compare(password, user.password);
  return isMatch;
}

const User = mongoose.model('User', userSchema) || mongoose.models.users;

export default User;