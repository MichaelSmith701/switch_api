const express = require('express'),
      router = express.Router(),
      db = require('../models');

router.get('/', function(req, res) {
  db.Game.find()
  .then(function(games){
    res.json(games);
  })
  .catch(function(err){
    res.send(err);
  });
});

router.get('/:gameId', function(req, res){
  db.Game.findById(req.params.gameId)
  .then(function(foundGame){
    res.json(foundGame);
  })
  .catch(function(err){
    res.send(err);
  });
});

router.post('/', function(req, res){
  db.Game.create(req.body)
  .then(function(newGame){
    res.send(newGame);
  })
  .catch(function(err){
    res.send(err);
  });
});

module.exports = router;