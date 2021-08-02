import mongoose from "mongoose"
const Schema = mongoose.Schema

const ThreadSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: false },
    userID: { type: Schema.Types.ObjectID, ref: "User", required: true },
    posts: [{ type: Schema.Types.ObjectID, ref: "Post", required: true }]
  },
  {timestamps: true}
)

export default mongoose.model("Thread", ThreadSchema)