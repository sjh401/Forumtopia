import mongoose from "mongoose"
const Schema = mongoose.Schema

const PostSchema = new Schema(
  {
    body: { type: String, required: true },
    imgUrl: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    threads: [{ type: Schema.Types.ObjectId, ref: "Post", required: true }]
  },
  {timestamps: true}
)

export default mongoose.model("Post", PostSchema)