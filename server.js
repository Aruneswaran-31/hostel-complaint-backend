const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hostel Complaint Backend Running");
});

// ✅ IMPORTANT CHANGE HERE
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
