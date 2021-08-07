import { Router } from "express"
import restrict from "../helpers/restrict.js"
import { createCategory, getCategories, getCategory, updateCategory, deleteCategory} from "../controllers/category.js"

const router = Router()

router.post("/categories", restrict, createCategory)
router.get("/categories", getCategories)
router.get("/categories/:id", getCategory)
router.put("/categories/:id", restrict, updateCategory) 
router.delete("/categories/:id", restrict, deleteCategory) 

export default router