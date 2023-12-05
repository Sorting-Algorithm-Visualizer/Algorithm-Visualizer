const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
require('dotenv').config();

const myURI = process.env.DATABASE_URI;
console.log('myURI:', myURI);

mongoose.connect(myURI);

const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to DB!');
});

db.on('error', (err) => {
  console.log('Error connecting to DB =>', err);
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_at: { type: Date, default: new Date() }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcryptjs.hash(this.password, 10);
  next();
});

userSchema.methods.comparePassword = async function (plaintext, callback) {
  const placeholder = await bcryptjs.compare(plaintext, this.password);
  console.log('placeholder:', placeholder);
  return callback(placeholder);
};

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
