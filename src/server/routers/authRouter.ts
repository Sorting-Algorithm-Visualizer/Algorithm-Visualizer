export {};

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(200).send('made it back from auth');
});


module.exports = router;
