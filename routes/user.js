import { Router } from "express"
import { signUp, login, verify, getUsers, getUser, updateUser } from "../controllers/user.js"

const router = Router()

router.post("/sign-up", signUp)
router.post("/login", login)
router.get("/verify", verify)
router.get("/users", getUsers)
router.get("/users/:id", getUser)
router.put("/users/:id", updateUser)


export default router