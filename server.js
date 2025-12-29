const express = require("express");
const cors = require("cors");

// ✅ INIT APP FIRST
const app = express();

// ✅ MIDDLEWARE
app.use(cors());
app.use(express.json());

// ✅ ROUTES (after app init)
const authRoutes = require("./routes/auth");
const complaintRoutes = require("./routes/complaints");

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);

// ✅ TEST ROUTE
app.get("/", (req, res) => {
  res.send("Hostel Complaint Backend Running");
});

// ✅ PORT FIX FOR RAILWAY
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
