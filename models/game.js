const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  igdbID: {type: Number, required:"require igdb ID"},
  name: {type: String, required:"missing name"},
  releaseDate: {type: String, required:"missing release date"},
  popularity: {type: Number, required:"missing popularity rating"},
  cover: {type: String, required:"missing cover URL"},
  officialURL: {type: String, required:"missing official URL"},
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;