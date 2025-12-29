const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ RE-ENABLE AUTH ROUTES
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is LIVE on Railway");
});

const PORT = process.env.PORT;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port", PORT);
});

// Keep alive (Railway-safe)
setInterval(() => {
  console.log("Heartbeat: server alive");
}, 30000);
