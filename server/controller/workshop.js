import { uploadFileOnCloudinary } from "../config/cloudinary.js";
import WorkShop from "../model/workshop.js";

export const createWorkshop = async(req,res,next) => {
  try{
    const user = req.user.id
    const {title,description,date,price} = req.body
    const picture = req.file
    const imageUrl = await uploadFileOnCloudinary(picture)
    const workshop = new WorkShop({title, description, date, price, image:imageUrl, artisanId:user});
    await workshop.save();
    if(workshop){
      res.status(201).json(workshop);
    }else{
      res.status(400).json({message: 'Failed to create workshop'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getWorkshops = async(req,res,next) => {
  try{
    const workshops = await WorkShop.find();
    res.status(200).json(workshops);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getWorkshopById = async(req,res,next) => {
  try{
    const workshop = await WorkShop.findById(req.params.id);
    if(workshop){
      res.status(200).json(workshop);
    }else{
      res.status(404).json({message: 'Workshop not found'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const updateWorkshop = async(req,res,next) => {
  try{
    const {title ,description,date,price} = req.body
    const picture = req.file
    const workshop = await WorkShop.findById(req.params.id);
    if(workshop){
      if(title) workshop.title = title;
      if(description) workshop.description = description;
      if(date) workshop.date = date;
      if(price) workshop.price = price;
      if(picture) workshop.image = await uploadFileOnCloudinary(picture);
      await workshop.save();
      res.status(200).json({
        message:"workshop updated successfully",
        workshop
      });
    } else{
      res.status(404).json({message: 'Workshop not found'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const deleteWorkshop = async(req,res,next) => {
  try{
    const workshop = await WorkShop.findByIdAndDelete(req.params.id);
    if(workshop){
      res.status(200).json({message: 'Workshop deleted successfully'});
    } else{
      res.status(404).json({message: 'Workshop not found'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

// user actions 

export const bookWorkshop = async(req,res,next) => {
  try{
    const userId = req.user.id
    const workshopId = req.params.id
    const workshop = await WorkShop.findById(workshopId);
    if(workshop){
      if(workshop.participants.includes(userId)){
        res.status(400).json({message: 'User already booked this workshop'});
      } else{
        workshop.participants.push(userId);
        await workshop.save();
        res.status(200).json({message: 'User booked workshop successfully'});
      }
    } else{
      res.status(404).json({message: 'Workshop not found'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const cancelBooking = async(req,res,next) => {
  try{
    const userId = req.user.id
    const workshopId = req.params.id
    const workshop = await WorkShop.findById(workshopId);
    if(workshop){
      if(!workshop.participants.includes(userId)){
        res.status(400).json({message: 'User has not booked this workshop'});
      } else{
        workshop.participants = workshop.participants.filter(participant => participant !== userId);
        await workshop.save();
        res.status(200).json({message: 'User canceled booking successfully'});
      }
    } else{
      res.status(404).json({message: 'Workshop not found'});
    }
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getBookingsByUserId = async(req,res,next) => {
  try{
    const userId = req.user.id
    const workshops = await WorkShop.find({participants: userId});
    res.status(200).json(workshops);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}