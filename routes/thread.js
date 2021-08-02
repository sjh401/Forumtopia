import { Router } from "express"
import { createThread, getThreads, getThread, updateThread, deleteThread } from "../controllers/threads.js"

const router = Router()

router.post("/create-thread", restrict, createThread)
router.get("/threads", getThreads)
router.get("/threads", getThread)
router.put("/threads/:id", restrict, updateThread)
router.delete("/threads/:id", restrict, deleteThread)

export default router