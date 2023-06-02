import "dotenv/config";
import express from "express";
import ConnectDatabase from "./config/db.js";
import router from "./routes/Routes.js";
import cors from "cors";

//Connect to Database
ConnectDatabase()

// Initialize express
const app = express();

// Add Routes
app.use("/api/v1/posts", router)

// middleware
app.use(cors())
app.use(express.json());

// Run on PORT
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`[INFO] Server running on port ${PORT}`)
});