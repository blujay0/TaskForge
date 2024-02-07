// load env variables
if (process.env.NODE_ENV != 'production') {
  require("dotenv").config();
}

// import dependencies
const express = require('express');

// create an express app
const app = express();

// routing
app.get('/', (req, res) => {
  res.json({ hello: "world" });
});

// start server
app.listen(process.env.PORT);