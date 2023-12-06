const mongoose = require('mongoose');
require('dotenv').config();

const myURI = process.env.DATABASE_URI;
console.log('myURI:', myURI);

mongoose.connect(myURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to DB!');
});

db.on('error', (err) => {
  console.log('Error connecting to DB =>', err);
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: new Date() }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
