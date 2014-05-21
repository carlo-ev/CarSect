var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phrasesSchema = new Schema({
	id : Schema.ObjectId,
	title : String,
	body : String
});

module.exports = mongoose.model('Phrases', phrasesSchema);
