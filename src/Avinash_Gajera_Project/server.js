const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer"); // Import multer
const path = require("path"); // Import path module

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const mongoURI = "mongodb://localhost:27017/mydatabase"; // Make sure this string is correct
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage }); // Initialize multer with storage settings

// Import User model
const User = require("./models/User");

// Ensure uploads directory exists
const fs = require("fs");
const uploadsDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Registration API
app.post("/register", upload.single("profilePicture"), async (req, res) => {
  try {
    console.log("Request Body:", req.body);
    console.log("Request File:", req.file);

    const { personName, email, username, contactInfo } = req.body;
    const profilePicture = req.file ? req.file.path : "";

    if (!personName || !email || !username || !contactInfo || !profilePicture) {
      console.log("Validation failed:", {
        personName,
        email,
        username,
        contactInfo,
        profilePicture,
      });
      return res.status(400).json({ message: "All fields are required" });
    }

    const newUser = new User({
      personName,
      email,
      username,
      contactInfo,
      profilePicture,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error saving user:", err);
    res.status(400).json({ message: err.message });
  }
});

app.post("/register", upload.single("profilePicture"), async (req, res) => {
  try {
    const { personName, email, username, contactInfo } = req.body;
    const profilePicture = req.file.path;

    const newUser = new User({
      personName,
      email,
      username,
      contactInfo,
      profilePicture,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// View Registration Data API
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({}, "-password");
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Registration User Data API
app.put("/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete User API
app.delete("/users/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
