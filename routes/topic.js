import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createTopic, getTopics, getTopic, updateTopic, deleteTopic} from "../controllers/topic.js"

const router = Router()

router.post("/topics", restrict, createTopic)
router.get("/topics", getTopics)
router.get("/topics/:id", getTopic)
router.put("/topics/:id", restrict, updateTopic) 
router.delete("/topics/:id", restrict, deleteTopic) 

export default router