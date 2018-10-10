const mongoose  = require('mongoose'),
      bcrypt    = require('bcrypt'),
      Comment   = require('./comment');
      
      // probabaly going to need to require the news article name so that 
      // when user profile is clicked we can see which article each
      // comment was referring to
      
const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

userSchema.pre('save', async function(next) {
  try {
    if(!this.isModified('password')){
      return next();
    }
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch(err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword, next) {
  try {
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch(err) {
    return next(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;