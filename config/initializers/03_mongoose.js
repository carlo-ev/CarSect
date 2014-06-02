var mongoose = require('mongoose');

module.exports = function(){
    switch(this.env){
		case 'development':
			mongoose.connect('mongodb://localhost/dev');
		case 'production':
			mongoose.connect('mongodb://localhost/carsek');
    }
    mongooseTypes = require('mongoose-3x-types');
    mongooseTypes.loadTypes(mongoose);
}
