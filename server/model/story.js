import mongoose from "mongoose";
const StorySchema = new mongoose.Schema({
  artisanId: { type: mongoose.Schema.Types.ObjectId,ref:"User" ,required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: String, 
  location:String,
},{
  timestamps: true,
});


const Story = mongoose.model("Story",StorySchema)

export default Story