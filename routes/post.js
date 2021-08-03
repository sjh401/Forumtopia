import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createPost, getPosts, getPost, updatePost, deletePost} from "../controllers/post.js"

const router = Router()

router.post("/create-post", restrict, createPost)
router.get("/posts", getPosts)
router.get("/posts/:id", getPost)
router.put("/posts/:id", updatePost)
router.delete("/posts/:id", deletePost)

export default router