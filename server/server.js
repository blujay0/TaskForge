// load env vars
// wrap in if statement to run only for local env use
if (process.env.NODE_ENV != 'production') {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectToDb = require('./config/connectToDb');
const notesController = require('./controllers/notesController')

// create an express app
const app = express();

// configure express appp to read json
app.use(express.json());

// connecty to db
connectToDb();

// routing
// fetch all notes
app.get('/notes', notesController.fetchNotes);

// fetch single note
app.get('/notes/:id', notesController.fetchNote);

// create note
app.post('/notes', notesController.createNote);

app.put('/notes/:id', notesController.updateNote);

// delete
app.delete('/notes/:id', notesController.deleteNote);

// start server
app.listen(process.env.PORT);
