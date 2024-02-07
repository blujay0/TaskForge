// load env vars
// wrap in if statement to run only for local env use
if (process.env.NODE_ENV != 'production') {
  require("dotenv").config();
}

// import dependencies
const express = require("express");
const connectToDb = require('./config/connectToDb');
const Note = require("./models/note");

// create an express app
const app = express();

// configure express appp to read json
app.use(express.json());

// connecty to db
connectToDb();

// routing
app.get('/', (req, res) => {
  res.json({hello: "world"})
})

// fetch all notes
app.get('/notes', async (req, res) => {
  // find the notes
  const notes = await Note.find();
  // respond with the notes
  res.json({notes: notes })
})

// fetch single note
app.get('/notes/:id', async (req, res) => {
  // get id off the url
  const noteId = req.params.id;

  // find the note using that id
  const note = await Note.findById(noteId);

  // respond with the note
  res.json({note: note})
})

// create note
app.post('/notes', async (req, res) => {
  // get sent in data off req body
  const title = req.body.title;
  const body = req.body.body;

  // create a note
  const note = await Note.create({
    title: title,
    body: body,
  });

  // respond with the new note
  res.json({note: note});
})

app.put('/notes/:id', async(req, res) => {
  // get the id off the url
  const noteId = req.params.id;

  // get the data off the request body
  const title = req.body.title;
  const body = req.body.body;

  // find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title: title,
    body: body,
  });

  // find updated note
  const note = await Note.findById(noteId);

  // respond with it
  res.json({note: note});
})

// delete
app.delete('/notes/:id', async(req, res) => {
  // get id off url
  const noteId = req.params.id;

  // delete the record
  await Note.deleteOne({id: noteId}); 

  // respond
  res.json({success: "Record deleted"});
})

// start server
app.listen(process.env.PORT);
