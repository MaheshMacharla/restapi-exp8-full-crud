// app.js
const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Sample API route
app.get("/api/message", (req, res) => {
  res.json({ message: "This is a simple REST API response." });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
