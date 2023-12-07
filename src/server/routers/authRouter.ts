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
    res.status(200).send('made it back from auth');
  }
);

router.post('/login', authController.authUser, (req, res) => {
  res.status(200).send('redirect to homepage');
});

router.post('/signup', (req, res) => {
  // res.status(200).send('made it back from auth');
  res.redirect('/visualizer');
});

module.exports = router;
