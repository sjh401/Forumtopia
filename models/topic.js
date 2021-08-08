import mongoose from "mongoose"
const Schema = mongoose.Schema

const TopicSchema = new Schema(
  {
    title: { type: String, required: true, trim: true, unique: true},
    body: { type: String, required: true },
    imgUrl: { type: String, required: true },
    threadId: [{ type: Schema.Types.ObjectId, ref: "Thread"}]
  },
  {timestamps: true}
)

export default mongoose.model("Topic", TopicSchema)