var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema ({
  _id: String


},{collection:'game'});

module.exports = mongoose.model('Game', gameSchema);
