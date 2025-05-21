import mongoose, { Schema } from "mongoose";
mongoose.set("runValidators", true);

const orderSchema = new Schema({
  email: { type: String, required: true },
  items: [
    {
      product: { type: Schema.Types.ObjectId, ref: "product", required: true },
      quantity: { type: Number, required: true, default: 1, min: 1 },
    },
  ],
  created: { type: Date, default: Date.now },
});

export default mongoose.models.order || mongoose.model("order", orderSchema);
