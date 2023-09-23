import express from "express"
import router from "./src/routes"
import dotenv from "dotenv"

async function start(): Promise<void> {
    try {
        dotenv.config()
        
        const app = express()
        const PORT = 5000

        app.use(express.json())

        app.use("/api/v1", router)

        app.listen(PORT, () => console.log("Server express running"))
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

void start()