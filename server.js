const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);


const app = express();

app.use(cors());
app.use(express.json());

// ✅ RE-ENABLE AUTH ROUTES
app.use("/api/auth", authRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Backend is LIVE on Railway");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep alive (Railway-safe)
setInterval(() => {
  console.log("Heartbeat: server alive");
}, 30000);
