import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import moodRoutes from "./routes/moodRoutes.js";
import journalRoutes from "./routes/journalRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "SafeTalk API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/moods", moodRoutes);
app.use("/api/journals", journalRoutes);
app.use("/api/todos", todoRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/chat", chatRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;