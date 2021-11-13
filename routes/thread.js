import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createThread, getThreads, getThreadsCategories, getThread, updateThread, deleteThread, getThreadsUsers } from "../controllers/thread.js"

const router = Router()

router.post("/categories/:id/threads", restrict, createThread)
router.get("/categories/:id/threads", getThreadsCategories)
router.get("/categories/:id/threads/users", getThreadsUsers)
router.get("/threads", getThreads)
router.get("/threads/:id", getThread)
router.put("/threads/:id", restrict, updateThread)
router.delete("/threads/:id", restrict, deleteThread)

export default router