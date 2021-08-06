import mongoose from "mongoose"
const Schema = mongoose.Schema

const CategorySchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    threadId: [{ type: Schema.Types.ObjectId, ref: "Thread"}]
  },
  {timestamps: true}
)

export default mongoose.model("Category", CategorySchema)