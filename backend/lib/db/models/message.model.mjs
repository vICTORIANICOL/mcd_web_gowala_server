import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const messageSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  description: { type: String, required: true },
  status: { type: Boolean, default: false },
  created: { type: Date, default: Date.now },
});

export default mongoose.models.message ||
  mongoose.model("message", messageSchema);
