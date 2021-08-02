import mongoose from "mongoos"
const Schema = mongoose.Schema

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true , trim: true, unique: true },
    passwordDigest: { type: String, required: true, select: false },
    posts: [{ type: Schema.Types.ObjectID, ref: "Post", required: true }],
    threads: [{ type: Schema.Types.ObjectID, ref: "Thread", required: true }]
  },
  {timestamps: true}
)

export default mongoose.model("User", UserSchema)