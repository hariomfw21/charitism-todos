const jwt = require("jsonwebtoken");
require("dotenv").config();

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded) {
        const userId = decoded.userId;
        req.body.userId = userId;
        next();
      } else {
        res.status(401).json({
          error: "Unauthorized",
          message: "Token verification failed",
        });
      }
    } catch (error) {
      res.status(500).json({
        error: "Internal Server Error",
        message: "Error verifying token",
      });
    }
  } else {
    res
      .status(401)
      .json({ error: "Unauthorized", message: "Token must be provided" });
  }
};

module.exports = {
  auth,
};
