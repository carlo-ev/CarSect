var mongoose = require('mongoose');
//var Schema = mongoose.Schema;


mongoose.connect('localhost:27017/dev');
var Schema = mongoose.Schema;
var phrasesSchema = new Schema({
	title : String,
	body : String
});

module.exports = mongoose.model('Phrases', phrasesSchema);
