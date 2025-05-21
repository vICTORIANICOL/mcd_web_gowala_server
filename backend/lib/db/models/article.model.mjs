import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const articleSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  list: [{ type: String }],
  image: { type: String },
  created: { type: Date, default: Date.now },
});

export default mongoose.models.article ||
  mongoose.model("article", articleSchema);
