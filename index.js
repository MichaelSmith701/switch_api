require('dotenv').config();

const express       = require('express'),
      app           = express(),
      bodyParser    = require('body-parser'),
      cors          = require('cors'),
      errorHandler  = require('./handlers/error');

const gameRoutes = require('./routes/games');   
const newsRoutes = require('./routes/news');
const authRoutes = require('./routes/auth');
const commentRoutes = require('./routes/comments');

// const userRoutes = require('./routes/user');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.send("This is the express API server");
});

app.use('/api/games', gameRoutes);
app.use('/api/news', newsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

app.use(function(req, res, next){
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, function() {
  console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`);
});