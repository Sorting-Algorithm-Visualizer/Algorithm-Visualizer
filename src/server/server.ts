// this is our server
const express = require('express');

const authRouter = require('./routers/authRouter');

const app = express();
const port: number = 3000;

// serve static files
app.use(express.static('dist'));


app.post('/auth/login', (req, res) => {
  res.status(200).send('Where do you want this to go Andrew?');
});

app.use('/auth', authRouter);

// handle unknown endpoints
app.use((req, res) => {
  return res.status(404).send();
});

// handle errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'An error occurred',
    status: 500,
    message: 'Watch out for those errors'
  };

  const trueErr = {
    ...defaultErr,
    ...err
  };

  console.log(trueErr);
  res.status(trueErr.status).send(trueErr.message);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
