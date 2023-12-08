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
  const res1: obj = nodeMocks.createResponse({
    locals: {
      authorized: true
    }
  });
  const res2: obj = nodeMocks.createResponse({
    locals: {}
  });
  const req: obj = {};
  test('sets the cookie if res.locals.authorized is true', () => {
    setSessionCookie(req, res1, next);

    // something like this should be the test
    expect(res1.cookies).toEqual({
      session: {
        options: {
          httpOnly: true
        },
        value: 'welcome'
      }
    });
  });

  test('does not set the cookie otherwise', () => {
    setSessionCookie(req, res2, next);

    expect(res2.cookies).toEqual({});
  });
});

describe('checkSessionCookie', () => {
  const next = jest.fn();
  const req1 = nodeMocks.createRequest({
    cookies: {
      session: 'welcome'
    }
  });
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
