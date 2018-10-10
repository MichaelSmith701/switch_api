const mongoose = require('mongoose'),
      News     = require('./news'),
      User     = require('./user');
      
const commentSchema = new mongoose.Schema({
  comment: {type: String, required:true},
  // user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  date: {type: Date, default: Date.now},
  articleId: {type: mongoose.Schema.Types.ObjectId, ref: "News"}
});

// commentSchema.pre('remove', async function(next){
//   // find a user and remove the comment id from their comment list
//   // then save and return next
//   try {
//     let user = await User.findbyId(this.user);
//     user.comments.remove(this.id);
//     await user.save();
//     return next();
//   } catch(err) {
//     return next(err);
//   }
// });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;