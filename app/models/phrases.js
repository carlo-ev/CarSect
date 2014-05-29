var mongoose = require('mongoose');
//var Schema = mongoose.Schema;


mongoose.connect('mongodb://localhost/dev');
var Schema = mongoose.Schema;
/*var phrasesSchema = new Schema({
  id: Number,file:///home/carlo/Documents/carsek/app/controllers/phrasesController.js

	title : String,
	body : String
});
*/
module.exports = mongoose.model('Phrases', new Schema({title: String, body: String}));