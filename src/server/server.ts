// this is our server
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

const authRouter = require('./routers/authRouter');
// const authController = require('./controllers/authController');
const cookieController = require('./controllers/cookieController');

const app = express();
const port: number = 3000;

// parse incoming json
app.use(express.json());

// parse incoming urlencoded data
app.use(express.urlencoded({ extended: true }));

// parse incoming cookies
app.use(cookieParser());

app.get('/public/auth.bundle.js',
  (req, res) => {
    console.log('got here');
    return res.sendFile(path.join(__dirname, '..', '..', 'dist', 'public', 'auth.bundle.js'));
  }
);

app.use('/auth', authRouter);

app.get('/visualizer',
  cookieController.checkSessionCookie,
  (req, res) => {
    if (res.locals.validated) {
      res.sendFile(path.join(__dirname, '..', '..', 'dist', 'private', 'visualizer.html'));
    } else {
      res.redirect('/');
    }
  }
);

app.get('/private/visualizer.bundle.js',
  cookieController.checkSessionCookie,
  (req, res) => {
    if (res.locals.validated) {
      res.sendFile(path.join(__dirname, '..', '..', 'dist', 'private', 'visualizer.bundle.js'));
    } else {
      res.redirect('/');
    }
  }
);

app.get('/',
  cookieController.checkSessionCookie,
  (req, res) => {
    if (res.locals.validated) {
      res.redirect('/visualizer');
    } else {
      res.sendFile(path.join(__dirname, '..', '..', 'dist', 'public', 'index.html'));
    }
  }
);


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
