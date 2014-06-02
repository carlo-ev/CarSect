var mongoose = require('mongoose');

module.exports = function(){
    console.log(this.env);
    switch(this.env){
		case 'development':
			mongoose.connect('mongodb://localhost/dev');
            break;
		case 'production':
			mongoose.connect('mongodb://admin:mongoadmin@kahana.mongohq.com:10023/carsek');
            break;
    }
    mongooseTypes = require('mongoose-3x-types');
    mongooseTypes.loadTypes(mongoose);
}
