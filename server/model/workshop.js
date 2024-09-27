const WorkshopSchema = new mongoose.Schema({
  artisanId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  image:String,
  participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const WorkShop = mongoose.models.workshops || mongoose.model("WorkShop",WorkshopSchema)

export default WorkShop