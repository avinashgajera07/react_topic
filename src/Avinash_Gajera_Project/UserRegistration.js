const User = require("./models/User");

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
