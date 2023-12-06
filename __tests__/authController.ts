export {};

require('dotenv').config();

// const authController = require('../src/server/controllers/authController');
const mongoose = require('mongoose');
const UserModel = require('../src/server/models/user_model');
// const dbURL = `${process.env.DATABASE_URI}`;

// beforeAll(async () => {
//   await mongoose.connect(dbURL);
// });

afterAll(async () => {
  await mongoose.connection.close();
});
// const { createUser } = authController;

// console.log(createUser);


describe('createUser', () => {
  test('createdUser', async () => {
    const user1Data = new UserModel({ username: 'John', password: 'doe' });
    const saveduser1 = await user1Data.save();
    expect(saveduser1.username).toBe('John');
    expect(saveduser1.password).toBe('doe');
  });
});
