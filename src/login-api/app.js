const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

// Create an Express app
const app = express();
const PORT = 3000;

// Use body-parser middleware
app.use(bodyParser.json());

// Mock user data
let users = [];

// Secret key for JWT
const SECRET_KEY = "your_jwt_secret_key";

// Register endpoint (to save the user with a hashed password)
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  const userExists = users.find((user) => user.username === username);
  if (userExists) {
    return res.status(400).json({ message: "User already exists!" });
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user to the mock database
  users.push({ username, password: hashedPassword });
  res.status(201).json({ message: "User registered successfully!" });
});

// Login endpoint (password verification)
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Find user by username
  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  // Compare provided password with hashed password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials!" });
  }

  // If valid, create a JWT oken
  const token = jwt.sign({ username: user.username }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.status(200).json({ message: "Login successful!", token });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
