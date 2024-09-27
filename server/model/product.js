const ProductSchema = new mongoose.Schema({
  artisanId: { type: mongoose.Schema.Types.ObjectId, ref:"User", required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: String, 
  stock: { type: Number, required: true },
  story:{
    type:mongoose.Schema.types.ObjectId,
    ref:"Story",
    required:true
  }
},{
  timestamps: true,
});


const Product = mongoose.models.products || mongoose.model("Product",ProductSchema);

export default Product