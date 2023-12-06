export {};

const nodeMocks = require('node-mocks-http');

const cookieController = require('../src/server/controllers/cookieController');
const { setSessionCookie, checkSessionCookie } = cookieController;
const mongoose = require('mongoose');

type obj = {
  [key: string]: any
};

afterAll(async () => {
  await mongoose.connection.close();
});

describe('setSessionCookie', () => {
  const next = jest.fn();
  const res: obj = nodeMocks.createResponse({
    locals: {
      session: 'welcome'
    }
  });
  const req: obj = {};
  test('sets the cookie', () => {
    setSessionCookie(req, res, next);

    // something like this should be the test
    expect(res.cookies).toEqual({
      session: {
        options: {
          httpOnly: true
        },
        value: 'welcome'
      }
    });
  });
});

describe('checkSessionCookie', () => {
  const next = jest.fn();
  const req1 = nodeMocks.createRequest({
    cookies: {
      session: 'welcome'
    }
  });
  console.log('describe ~ req1:', req1);
  const req2 = nodeMocks.createRequest({

  });
  const res = nodeMocks.createResponse();
  test('if session cookie is present, initialize \'validated\' property on res.locals to true', () => {
    checkSessionCookie(req1, res, next);

    expect(res.locals.validated).toBe(true);
  });
  test('if session cookie is not present, initialize \'validated\' property on res.locals to false', () => {
    checkSessionCookie(req2, res, next);

    expect(res.locals.validated).toBe(false);
  });
});
