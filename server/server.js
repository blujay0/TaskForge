// load env vars
// wrap in if statement to run only for local env use
if (process.env.NODE_ENV != 'production') {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectToDb = require('./config/connectToDb');

// create an express app
const app = express();

// connecty to db
connectToDb();

// routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
})

// start server
app.listen(process.env.PORT);
