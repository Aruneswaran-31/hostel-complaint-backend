const express = require("express");
const router = express.Router();

// MOCK LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "student@test.com" && password === "123456") {
    return res.json({
      token: "mock-student-token",
      role: "student",
    });
  }

  if (email === "admin@test.com" && password === "123456") {
    return res.json({
      token: "mock-admin-token",
      role: "admin",
    });
  }

  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
