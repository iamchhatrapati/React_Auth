const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Fix: deprecated warning
app.use(cors());

// MongoDB Atlas connection
mongoose
  .connect(
    "mongodb+srv://riteshmundwaik123:g5Ads7xJWxP0qNIZ@testing.vvckq02.mongodb.net/?retryWrites=true&w=majority&appName=Testing",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Atlas connected"))
  .catch((err) => console.error("DB connection error:", err));

// Mongoose Schema
const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Login route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      if (password === user.password) {
        res.send({ message: "Login successfully", user });
      } else {
        res.send({ message: "Password and confirm password didn't match" });
      }
    } else {
      res.send({ message: "Please login to proceed" });
    }
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

// Signup route
app.post("/signup", async (req, res) => {
  const { fname, lname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.send({ message: "User is already registered" });
    } else {
      const newUser = new User({ fname, lname, email, password });
      await newUser.save();
      res.send({ message: "Account has been created!! Please Login" });
    }
  } catch (err) {
    res.status(500).send({ message: "Server error", error: err.message });
  }
});

// Start server
app.listen(8000, () => {
  console.log("Server starting at 8000");
});
