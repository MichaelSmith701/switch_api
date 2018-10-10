const mongoose = require('mongoose'),
      Comment = require('./comment');

const newsSchema = new mongoose.Schema({
  title: {type: String, required:"missing title"},
  image: {type: String, required:"missing image"},
  summary: {type: String},
  content: {type: String, required:"missing content"},
  date: {type: Date, default: Date.now},
});

const News = mongoose.model('News', newsSchema);

module.exports = News;