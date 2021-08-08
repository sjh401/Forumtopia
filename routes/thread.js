import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createThread, getThreads, getThread, updateThread, deleteThread, getThreadsUsers } from "../controllers/thread.js"

const router = Router()

router.post("/categories/:id/threads", restrict, createThread)
router.get("/categories/:id/threads", getThreads)
router.get("/categories/:id/threads/users", getThreadsUsers)
router.get("/threads/:id", getThread)
router.put("/threads/:id", restrict, updateThread)
router.delete("/threads/:id", restrict, deleteThread)

export default router