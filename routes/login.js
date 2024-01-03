const express = require("express");

const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userSchema");
require("dotenv").config();

const login = express.Router();

login.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await UserModel.find({ email });

    // Check if user is registered
    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, async (err, result) => {
        if (result) {
          var token = jwt.sign({ userId: data[0]._id }, process.env.SECRET_KEY);
          res.json({ login: "Successful", token: token });
        } else {
          res
            .status(401)
            .json({ login: "Failed", message: "Invalid password" });
        }
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = {
  login,
};
