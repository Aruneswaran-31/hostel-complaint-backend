const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is LIVE on Render");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

// 🔒 KEEP PROCESS ALIVE (IMPORTANT FOR RENDER DEBUG)
setInterval(() => {
  console.log("Heartbeat: server alive");
}, 30000);
