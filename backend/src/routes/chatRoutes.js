import express from "express";
import { chatSupport } from "../controllers/chatController.js";

const router = express.Router();

router.post("/", chatSupport);

export default router;