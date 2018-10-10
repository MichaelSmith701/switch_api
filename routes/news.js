const express = require('express'),
      router = express.Router(),
      db = require('../models');
      

router.get('/', function(req, res) {
  db.News.find()
  .then(function(news){
    res.json(news);
  })
  .catch(function(err){
    res.send(err);
  });
});

router.get('/:newsId', function(req, res){
  db.News.findById(req.params.newsId)
  .then(function(foundNews){
    res.json(foundNews);
  })
  .catch(function(err){
    res.send(err);
  });
});

router.post('/', function(req, res) {
  db.News.create(req.body)
  .then(function(newNews){
    res.send(newNews);
  })
  .catch(function(err){
    res.send(err);
  });
});

module.exports = router;