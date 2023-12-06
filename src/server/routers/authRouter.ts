// router for authentication and authorization
export {};

const express = require('express');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');

const router = express.Router();

router.post('/signup',
  authController.createUser,
  cookieController.setSessionCookie,
  (req, res) => {
    res.status(200).send('made it back from auth');
  }
);

router.post('/login', authController.authUser, (req, res) => {
  res.status(200).send('redirect to homepage');
});

module.exports = router;
