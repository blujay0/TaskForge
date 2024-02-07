// load env variables
if (process.env.NODE_ENV != 'production') {
  require("dotenv").config();
}

// import dependencies
const express = require('express');
const connectToDb = require('./config/connectToDb');

// create an express app
const app = express();

// connect to db
connectToDb();

// routing
app.get('/', (req, res) => {
  res.json({ hello: "world" });
});

// start server
app.listen(process.env.PORT);