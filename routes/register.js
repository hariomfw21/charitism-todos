const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/userSchema");

const register = express.Router();

register.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if email is already registered
    const existing = await UserModel.find({ email });

    if (existing.length > 0) {
      res.status(409).json({
        message: `${email} already registered with a different account`,
      });
    } else {
      // Hash the password before saving
      bcrypt.hash(password, 5, async (err, hash) => {
        const data = new UserModel({ username, email, password: hash });
        await data.save();
        res.status(201).json({
          registration: "Successful",
          message: "User registered successfully",
        });
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  register,
};
