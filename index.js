const express = require("express");
const { register } = require("./routes/register");
const { connnection } = require("./Connection/connection");
const { login } = require("./routes/login");
const { auth } = require("./middleware/auth");
const Todo = require("./routes/Todo");

require("dotenv").config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/", register);
app.use("/", login);

app.use(auth);

app.use("/todo", Todo);

app.listen(process.env.PORT, async () => {
  console.log(`listening on port ${process.env.PORT}`);
  try {
    await connnection;
    console.log("connected to database");
  } catch (error) {
    console.log("error: ", error.message);
  }
});
