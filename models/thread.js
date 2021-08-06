import mongoose from "mongoose"
const Schema = mongoose.Schema

const ThreadSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    imgUrl: { type: String, required: false },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
<<<<<<< HEAD
=======
    categoryId: { type: Schema.Types.ObjectId, ref: "Post", required: true},
>>>>>>> 74dd7d64ee9588d060eeed53b04dec01f059436b
    posts: [{ type: Schema.Types.ObjectId, ref: "Post"}]
  },
  {timestamps: true}
)

export default mongoose.model("Thread", ThreadSchema)