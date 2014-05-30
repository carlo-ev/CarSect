var mongoose = require('mongoose');

module.exports = function(){
	switch(env){
		case 'development':
			mongoose.connect('mongod://localhost/dev');
		case 'production':
			mongoose.connect('?');
	}
}
