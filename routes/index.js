import { Router } from "express"
import userRoutes from "./user.js"
import postRoutes from "./post.js"
import threadRoutes from "./thread.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the api root"))

router.use("/", userRoutes)
router.use("/", postRoutes)
router.use("/", threadRoutes)

export default router

// test