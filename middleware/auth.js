require("dotenv").load();
const jwt = require("jsonwebtoken");

//check to make sure the user is logged in
exports.loginRequired = function(req, res, next) {
  try {
    // since header is 'bearer token', we can create an array separated by a space and use [1] to access token
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
      if(decoded) {
        return next();
      } else {
        return next({
          status: 401,
          message: "You must login to perform this action."
        });
      }
    });
  } catch(e) {
    return next({status: 401, message: "You must login to perform this action."});
  }
};