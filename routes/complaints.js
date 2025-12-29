const express = require("express");
const router = express.Router();

// In-memory complaints (mock DB)
let complaints = [];

// Student submits complaint
router.post("/", (req, res) => {
  const { category, description } = req.body;

  if (!category || !description) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newComplaint = {
    id: Date.now(),
    category,
    description,
    status: "Pending",
  };

  complaints.push(newComplaint);

  res.json({ message: "Complaint submitted successfully" });
});

// Admin fetches all complaints
router.get("/", (req, res) => {
  res.json(complaints);
});

// Admin resolves complaint
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const complaint = complaints.find(c => c.id === id);

  if (!complaint) {
    return res.status(404).json({ message: "Complaint not found" });
  }

  complaint.status = "Resolved";
  res.json({ message: "Complaint resolved" });
});

module.exports = router;
