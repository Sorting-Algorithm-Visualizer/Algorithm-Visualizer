export {};

const userModel = require('../models/user_model');

const authController: {
  [index: string]: unknown
} = {};

authController.createUser = async (req, res, next) => {
  console.log(req.body);

  try {
    let username: string = req.body.username
    let password: string = req.body.password
    let newUser = new userModel({ username, password })
    let savedUser = await newUser.save()
    console.log(`User ${savedUser} saved`);
    return next();
  } catch (err) {
    return next({ message: "Error saving user", err })
  }
}

authController.authUser = async (req, res, next) => {
  let username: string = req.body.username
  let password: string = req.body.password
  try {
    let authorized:boolean = false
    let compareUser = await userModel.findOne ({ username, password })
    if (compareUser) authorized = true;
    if (authorized){
      return next ()
    } else {
      console.log('Wrong username or password')
    }
    } catch (err) {
      return next ({ message: "Error logging in", err})
    }
 }


module.exports = authController;
