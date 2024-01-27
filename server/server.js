// setup Express server with user auth
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

// connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// define user schema and model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

// middleware to parse JSON bodies
app.use(express.json());

// routes for user auth
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, password: hashedPassword });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }
  const token = jwt.sign({ username: user.username }, JWT_SECRET);
  res.json({ token });
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
