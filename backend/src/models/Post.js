import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userName: { type: String, default: "Anonymous" },
    content: { type: String, required: true },
    tip: { type: String, default: "" }
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;