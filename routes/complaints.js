const express = require("express");
const db = require("../db");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

/* CREATE COMPLAINT (STUDENT) */
router.post("/", auth, (req, res) => {
  const { category, description } = req.body;

  const sql =
    "INSERT INTO complaints (user_id, category, description, status) VALUES (?, ?, ?, ?)";

  db.query(
    sql,
    [req.user.id, category, description, "Pending"],
    (err) => {
      if (err) {
        return res.status(500).json({ message: "Complaint failed" });
      }
      res.json({ message: "Complaint submitted successfully" });
    }
  );
});

/* VIEW ALL COMPLAINTS (ADMIN) */
router.get("/", auth, (req, res) => {
  db.query(
    `SELECT complaints.*, users.name 
     FROM complaints 
     JOIN users ON complaints.user_id = users.id`,
    (err, results) => {
      res.json(results);
    }
  );
});

/* UPDATE STATUS (ADMIN) */
router.put("/:id", auth, (req, res) => {
  const { status } = req.body;

  db.query(
    "UPDATE complaints SET status = ? WHERE id = ?",
    [status, req.params.id],
    () => {
      res.json({ message: "Status updated successfully" });
    }
  );
});

module.exports = router;
