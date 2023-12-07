// router for authentication and authorization
export {};

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register',
  authController.createUser,
  (req, res) => {
    // res.status(200).send('made it back from auth');
    res.redirect('/visualizer');
  });

module.exports = router;
