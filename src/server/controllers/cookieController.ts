export {};

// these controller functions add cookies to the response object

// const UserModel = require('../models/user_model');


const cookieController: {
  [key: string]: any
} = {};

cookieController.setSessionCookie = (req, res, next) => {
  return 3;
};

module.exports = cookieController;
