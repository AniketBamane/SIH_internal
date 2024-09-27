import { uploadFileOnCloudinary } from "../config/cloudinary.js"
import transporter from "../config/transporter.js"
import User from "../model/user.js"
import { verificationTemplate } from "../Template/verification.js"
export const signup  = async (req, res, next) => {
  try{
    const { name, email, password, address, role, bio} = req.body
    const picture = req.file
    const newAddress = JSON.parse(address)
    const existingUser = await User.findOne({ email })
    if(existingUser){
      return res.status(400).json({
        message: "User already exists"
      })
    }
    const imageUrl = await uploadFileOnCloudinary(picture)
    const user =  new User({ name, email, password, address:newAddress,role,bio,profilePic:imageUrl })
    await user.save()
    const token =await user.generateToken()
    res.cookie("token",token).status(201).json({
      token,
      message: "User registered successfully",
      user
    })
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

export const login = async (req, res, next) => {
  try{
    const { email, password } = req.body
    console.log("in login ")
    const user = await User.findOne({ email })
    if(!user ||!(await user.comparePassword(password))){
      return res.status(400).json({
        message: "Invalid email or password"
      })
    }
    const token =await user.generateToken()
    res.cookie("token",token).status(201).json({
      token,
      message: "User logged in successfully",
      user
    })
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

export const logout = async (req, res, next) => {
  try{
    console.log("logout")
    res.clearCookie("token").status(200).json({
      message: "User logged out successfully"
    })
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

export const verifyEmail = async (req, res, next) => {
  try{
    const {email} = req.body;
    const random = Math.floor(Math.random() * 900000) + 100000
    const mailOptions = {
      from: 'aniketbamane696@gmail.com',
      to: email,
      subject: 'Email Verification',
      html:verificationTemplate.replace("/random/",random),
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ message: error.message });
      }       
      res.status(200).json({ message: ' Verification email sent',verificationCode : random})
    });
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

export const updateProfile = async(req,res,next) =>{
  try{
    const { name, address , bio} = req.body;
    const newAddress = JSON.parse(address)
    const user = req.user
    const picture =  req.file
    const currentUser = await User.findById({_id:user.id})
    if(!currentUser){
      return res.status(401).json({message: "Unauthorized"})
    }
    if(name) currentUser.name = name
    if(newAddress) currentUser.address = newAddress
    if(bio) currentUser.bio = bio
    if(picture) currentUser.profilePic = await uploadFileOnCloudinary(picture)
    await currentUser.save()
    const newUser = await User.findById(currentUser._id).populate("cart.products.product")
    res.status(200).json({message: "Profile updated successfully", user:newUser})
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

export const getCurrentUser = async(req,res,next)=>{
  try{
    const user = req.user
    const currentUser = await User.findById(user.id).populate("cart.products.product")
    res.status(200).json({message: "User fetched successfully", user:currentUser})
  }catch(err){
    res.status(500).json({
      message:err.message
    })
  }
}

// export const updateProfile = async(req,res,next)=>{
//   try{
//     const { name, address , bio,profilePic} = req.body;
//     const newAddress = JSON.parse(address)
//     console.log(name,newAddress," in update profile controller");
//     const user = req.user
//     console.log(user)
//     const currentUser = await User.findById({_id:user.id})
//     if(!currentUser){
//       return res.status(401).json({message: "Unauthorized"})
//     }
//     if(name) currentUser.name = name
//     if(newAddress) currentUser.address = newAddress
//     if(bio) currentUser.bio = bio
//     if(profilePic) currentUser.profilePic = profilePic
//     await currentUser.save()
//     const newUser = await User.findById(currentUser._id).populate("cart.dishes.dish")
//     res.status(200).json({message: "Profile updated successfully", user:newUser})
//   }catch(err){ 
//     res.status(500).json({message: err.message})
//   }
// }

// export const getCurrentUser = async (req, res) => {
//   try{
//     const user = req.user
//     const currentUser = await User.findById(user.id).populate("cart.dishes.dish")
//     console.log(currentUser,"---------------get current user ------------")
//     if(currentUser) {
//       res.status(200).json({user:currentUser})
//     }else{
//       res.status(404).json({message: "User not found"})
//     }
//   }catch(err){
//     console.log(err)
//     res.status(400).json({message: err.message})
//   }
// }