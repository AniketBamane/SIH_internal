import { uploadFileOnCloudinary } from "../config/cloudinary.js";
import Product from "../model/product.js";
export const createProduct = async(req,res,next) => {
  try{
    const {name,description,price,category,stock,storyId} =req.body;
    const picture = req.file
    const user = req.user.id
    const imageUrl = await uploadFileOnCloudinary(picture)
    const product = new Product({name,description,price,category,image:imageUrl,stock,artisanId:user,story:storyId});
    await product.save();
    res.status(201).json({
      message:"Product created successfully !",
      product
    });
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getProducts = async(req,res,next) => {
  try{
    const user = req.user.id;
    const products = await Product.find({artisanId: user}).sort({createdAt: -1});
    res.status(200).json(products);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const getProductById = async(req,res,next) => {
  try{
    const product = await Product.findById(req.params.id);
    if(!product){
      return res.status(404).json({message: "Product not found!"});
    }
    res.status(200).json(product);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const updateProduct = async(req,res,next) => {
  try{
    const {name,description,price,category,stock} = req.body;
    const picture = req.file
    const updatedProduct = await Product.findById(req.params.id)
    if(!updatedProduct){
      return res.status(404).json({message: "Product not found!"});
    }
    if(picture) updatedProduct.image = await uploadFileOnCloudinary(picture)
    if(name) updatedProduct.name = name;
    if(description) updatedProduct.description = description;
    if(price) updatedProduct.price = price;
    if(category) updatedProduct.category = category;
    if(stock) updatedProduct.stock = stock;
    await updatedProduct.save();
    res.status(200).json(updatedProduct);
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

export const deleteProduct = async(req,res,next) => {
  try{
    const product = await Product.findByIdAndDelete(req.params.id);
    if(!product){
      return res.status(404).json({message: "Product not found!"});
    }
    res.status(200).json({message: "Product deleted successfully!"});
  }catch(err){
    res.status(500).json({message: err.message});
  }
}

