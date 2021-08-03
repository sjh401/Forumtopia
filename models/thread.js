import mongoose from "mongoose"
const Schema = mongoose.Schema

const ThreadSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: false },
    userId: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
  },
  {timestamps: true}
)

export default mongoose.model("Thread", ThreadSchema)