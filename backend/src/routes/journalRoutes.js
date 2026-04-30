import express from "express";
import { getJournalEntries } from "../controllers/journalController.js";

const router = express.Router();

router.get("/", getJournalEntries);

export default router;