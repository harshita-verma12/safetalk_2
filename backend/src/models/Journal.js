import mongoose from "mongoose";

const journalSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    prompt: { type: String, required: true },
    response: { type: String, required: true }
  },
  { timestamps: true }
);

const Journal = mongoose.model("Journal", journalSchema);
export default Journal;