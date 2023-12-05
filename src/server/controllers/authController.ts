const authController: {
  [index: string]: unknown
} = {};

authController.createUser = (req, res, next) => {
  console.log('entered createUser');
  return next();
};

module.exports = authController;
