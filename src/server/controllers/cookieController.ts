export {};

// these controller functions add cookies to the response object

// const UserModel = require('../models/user_model');


const cookieController: {
  [key: string]: any
} = {};

cookieController.setSessionCookie = (req, res, next) => {
  // sets a cookie that will be used to tell whether client is logged in
  console.log('entered setSessionCookie');

  res.cookie('session', 'welcome', { httpOnly: true });
  return next();
};

cookieController.checkSessionCookie = (req, res, next) => {
  // checks whether session cookie exists and updates res.locals accordingly
  console.log('entered checkSessionCookie');

  if (req.cookies.session === 'welcome') res.locals.validated = true;
  else res.locals.validated = false;

  return next();
};

module.exports = cookieController;
