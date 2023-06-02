import express from "express";
import { GetAllPosts } from "../controllers/controller.js";

const router = express.Router();
router.route("/").get(GetAllPosts);
export default router;