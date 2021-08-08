import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createPost, getPosts, getPost, updatePost, deletePost} from "../controllers/post.js"

const router = Router()

router.post("/threads/:pid/posts", restrict, createPost)
router.get("/threads/:pid/posts", getPosts)
router.get("/threads/:pid/post", getPost)
router.put("/posts/:pid", restrict, updatePost)
router.delete("/threads/:pid/post", restrict, deletePost)

export default router