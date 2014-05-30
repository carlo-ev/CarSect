var mongoose = require('mongoose');

module.exports = function(){
  mongoose.connect('mongodb://localhost:27017/dev');
  mongooseTypes = require('mongoose-3x-types');
  mongooseTypes.loadTypes(mongoose);
  /*switch(this.env){
		case 'development':
			mongoose.connect('mongodb://localhost/dev');
		case 'production':
			mongoose.connect('?');
	}*/
}
