import { uploadFileOnCloudinary } from "../config/cloudinary.js";
import Story from "../model/story.js";

export const createStory = async(req,res,next)=>{
  try{
    console.log("......in create story")
    const {title ,content,location } = req.body
    const picture = req.file
    const user = req.user.id
    const imageUrl = await uploadFileOnCloudinary(picture)
    const newStory = new Story({
      title,
      content,
      image:imageUrl,
      artisanId:user,
      location
    });
    await newStory.save();
    const createdStory = await Story.findById(newStory._id).populate("artisanId")
    res.status(201).json({newStory:createdStory});
  }catch(err){
    res.status(400).json({message: err.message});
  }
}

export const getAllStories = async(req,res,next)=>{
  try{
    const stories = await Story.find().sort({createdAt: -1}).populate("artisanId");
    res.status(200).json({stories});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getStoryById = async(req,res,next)=>{
  try{
    const story = await Story.findById(req.params.id);
    if(!story){
      return res.status(404).json({message: 'Story not found'});
    }
    res.status(200).json(story);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const updateStory = async(req,res,next)=>{
  try{
    const {title,content,location} = req.body
    const picture = req.file
    const story = await Story.findById(req.params.id);
    if(!story){
      return res.status(404).json({message: 'Story not found'});
    }
    if(picture){
      
      story.image = await uploadFileOnCloudinary(picture)
    }
    if(title) story.title = title
    if(content) story.content = content
    if(location) story.location = location
    await story.save();
    const updateStory = await Story.findById(story._id).populate("artisanId");;
    res.status(200).json({story});
  }catch(err){
    res.status(400).json({message: err.message});
  }
}

export const deleteStory = async(req,res,next)=>{
  try{
    const story = await Story.findByIdAndDelete(req.params.id);
    if(!story){
      return res.status(404).json({message: 'Story not found'});
    }
    res.status(200).json({message: 'Story deleted'});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}