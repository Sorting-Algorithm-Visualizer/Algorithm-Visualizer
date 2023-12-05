// router for authentication and authorization
export {};

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/',
  authController.createUser,
  (req, res) => {
    res.status(200).send('made it back from auth');
  });


module.exports = router;
