import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createThread, getThreads, getGeneralThreads, getThread, updateThread, deleteThread } from "../controllers/thread.js"

const router = Router()

router.post("/topics/:id/threads", restrict, createThread)
router.get("/topics/:id/threads", getThreads)
router.get("/threads", getGeneralThreads)
router.get("/topics/:id/thread", getThread)
router.put("/threads/:id", restrict, updateThread)
router.delete("/threads/:id", restrict, deleteThread)

export default router