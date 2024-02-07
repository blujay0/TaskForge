// load env vars
if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

// import mongoose
const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch(err) {
    console.log(err);
  }
  
}

module.exports = connectToDb;