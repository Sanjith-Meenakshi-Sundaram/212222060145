import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: { type: String, required: true },
  shortcode: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiry: { type: Date },
  clicks: [
    {
      timestamp: Date,
      referrer: String,
      geo: String
    }
  ]
});

export default mongoose.model("Url", urlSchema);
