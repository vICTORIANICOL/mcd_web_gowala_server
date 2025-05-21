import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  image: { type: String },
  created: { type: Date, default: Date.now },
});

export default mongoose.models.product ||
  mongoose.model("product", productSchema);
