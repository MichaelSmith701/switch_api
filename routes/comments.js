const express = require('express'),
      router = express.Router(),
      db = require('../models');
      
   
   
router.get('/', function(req,res){
  db.Comment.find()
  .then(function(comments){
    res.json(comments);
  })
  .catch(function(err){
    res.send(err);
  });
});
      
router.get('/:articleId', function(req, res){
  db.Comment.find({articleId: req.params.articleId})
  .then(function(allComments){
    res.json(allComments);
  })
  .catch(function(err){
    res.send(err);
  });
});

// router.get('/:commentId', function(req, res){
//   res.send("This is the comment id route");
// });

router.post('/', function(req, res){
  db.Comment.create(req.body)
  .then(function(newComment){
    res.send(newComment);
  })
  .catch(function(err){
    res.send(err);
  });
});

router.delete('/:commentId', function(req, res){
  db.Comment.remove({_id: req.params.commentId})
  .then(function(){
    res.send("The comment was deleted");
  })
  .catch(function(err){
    res.send(err);
  });
});

module.exports = router;