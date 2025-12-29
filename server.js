const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend is LIVE on Render");
});

const PORT = process.env.PORT;

if (!PORT) {
  throw new Error("PORT not defined");
}

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

// Keep alive (Railway-safe)
setInterval(() => {
  console.log("Heartbeat: server alive");
}, 30000);
