let db = null;

if (process.env.DATABASE_URL) {
  // Future: cloud DB
  console.log("Cloud database configured");
} else {
  console.log("No database configured. Running without DB.");
}

module.exports = {
  query: () => {
    throw new Error("Database not configured");
  }
};
