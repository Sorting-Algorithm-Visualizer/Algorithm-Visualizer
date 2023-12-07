// this is our server
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRouter = require('./routers/authRouter');
const authController = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');

const app = express();
const port: number = 3000;

// serve static files
app.use(express.static('dist'));

// parse incoming json
app.use(express.json());

// parse incoming urlencoded data
app.use(express.urlencoded({ extended: true }));

// parse incoming cookies
app.use(cookieParser());

app.post('/auth/login', authController.authUser, (req, res) => {
  res.status(200).send('redirect to homepage');
});

app.post('/login', authController.authUser, (req, res) => {
  res.redirect('/visualizer');
});

app.use('/auth', authRouter);

// fenced endpoint
app.get('/secret', cookieController.checkSessionCookie, (req, res) => {
  if (res.locals.validated === true) return res.status(200).send('You are welcome here');
  return res.status(200).send('Get out');
});

app.get('/visualizer', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'visualizer.html'));
});

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
