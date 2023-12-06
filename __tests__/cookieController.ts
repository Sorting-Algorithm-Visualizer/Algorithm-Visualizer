export {};

const cookieController = require('../src/server/controllers/cookieController');
const { setSessionCookie } = cookieController;
const mongoose = require('mongoose');

afterAll(async () => {
  await mongoose.connection.close();
});

describe('setSessionCookie', () => {
  const next = jest.fn();
  const res = {
    locals: {
      sessionID: '123456789'
    }
  };
  test('test is connecting', () => {
    setSessionCookie(req, res, next);

    // something like this should be the test
    expect(res.cookie).toBe('123456789');
  });
});
