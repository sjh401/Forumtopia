import { Router } from "express"
import { createPost, getPosts, updatePost, deletePost} from "../controllers/post"

const router = Router()

router.post("/create-post", restrict, createPost)
router.get("/posts", getPosts)
router.put("/posts/:id", restrict, updatePost)
router.delete("/posts/:id", restrict, deletePost)

export default router