export {};

const UserModel = require('../models/user_model');

const authController: {
  [index: string]: unknown
} = {};

authController.createUser = async (req, res, next) => {
  console.log(req.body);
  res.locals.authorized = false;
  try {
    const username: string = req.body.username;
    const password: string = req.body.password;
    const newUser = new UserModel({ username, password });
    const savedUser = await newUser.save();
    console.log(`User ${savedUser} saved`);
    res.locals.authorized = true;
    return next();
  } catch (err) {
    return next({ message: 'Error saving user', err });
  }
};

authController.authUser = async (req, res, next) => {
  const username: string = req.body.username;
  const password: string = req.body.password;
  try {
    // let authorized: boolean = false;
    res.locals.authorized = false;
    const user = await UserModel.findOne({ username });
    await user.comparePassword(password, function (match: boolean) {
      console.log('match:', match);
      if (match) {
        console.log('matched');
        res.locals.authorized = true;
      }
    });
    return next();
    // if (res.locals.authorized) {
    //   return next();
    // } else {
    //   console.log('Wrong username or password');
    //   return res.status(200).send('Go away');
    // }
  } catch (err) {
    return next({ message: 'Error logging in', err });
  }
};


module.exports = authController;
