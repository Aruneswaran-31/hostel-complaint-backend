const mysql = require("mysql2");

// ❌ Comment out actual DB connection for now
/*
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "hostel_db"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected");
});
*/

module.exports = {
  query: () => {
    throw new Error("Database not configured yet");
  }
};
