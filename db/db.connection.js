const mongoose = require("mongoose");
require("dotenv").config();

const mongoUrl = process.env.MONGODB_URI;

const initializeDatabase = async () => {
  try {
    const connection = await mongoose.connect(mongoUrl);
    if (connection) {
      console.log("Database connected Successfully!");
    }
  } catch (error) {
    console.log("Database connection failed.", error);
  }
};

module.exports = { initializeDatabase };
