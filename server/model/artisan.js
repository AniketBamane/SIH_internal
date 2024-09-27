import mongoose from "mongoose";

const ArtisanSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  expertise: { type: String, required: true },
  location: { type: String, required: true },
  workshops: [String], // List of workshops they offer
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  stories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Story' }], // Storytelling about their craft
});

const Artisan = mongoose.models.artisans || mongoose.model('Artisan',ArtisanSchema);


export default Artisan;