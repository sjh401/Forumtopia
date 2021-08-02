import express from "express"
import cors from "cors"
import morgan from "morgan"

const app = express()
const PORT = process.env.PORT || 4567

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

app.use("/api",)


