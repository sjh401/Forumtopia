import { Router } from "express"
import { signUp, login, verify, getUsers } from "../controllers/user.js"

const router = Router()

router.post("/sign-up", signUp)
router.post("/login", login)
router.get("/verify", verify)
router.get("/users", getUsers)


export default router