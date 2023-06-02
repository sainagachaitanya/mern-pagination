import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import ConnectDatabase from "../config/db.js"
import Post from "../models/Post.js";

// Connect Database
ConnectDatabase()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'))

const ImportData = async () => {
  try {
    await Post.insertMany(posts);
    console.log("Data Successfully imported")
    process.exit();
  } catch (error) {
    console.log(`[ERROR]: ${error}`);
    process.exit(1);
  }
}

const DeleteData = async () => {
  try {
    await Post.deleteMany({});
    console.log("Data Successfully deleted")
    process.exit();
  } catch (error) {
    console.log(`[ERROR]: ${error}`);
    process.exit(1);
  }
}

if(process.argv[2] === "--import") {
  ImportData()
} else if (process.argv[2] === "--delete") {
  DeleteData()
}