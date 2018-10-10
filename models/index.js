const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/switch-api', {
  keepAlive: true,
  useNewUrlParser: true
});

mongoose.Promise = Promise;

module.exports.Game = require('./game');
module.exports.News = require('./news');
module.exports.User = require('./user');
module.exports.Comment = require('./comment');