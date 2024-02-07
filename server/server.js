// import dependencies
const express = require("express");

// create an express app
const app = express();

// routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
})

// start server
app.listen(3000);
