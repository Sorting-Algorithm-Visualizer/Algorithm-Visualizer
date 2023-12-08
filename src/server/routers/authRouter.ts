// router for authentication and authorization
export {};

const express = require('express');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

router.post('/register',
  authController.createUser,
  cookieController.setSessionCookie,
  (req, res) => {
    res.redirect('/visualizer');
  }
);

router.post('/login',
  authController.authUser,
  cookieController.setSessionCookie,
  (req, res) => {
    res.redirect('/visualizer');
  }
);

module.exports = router;
