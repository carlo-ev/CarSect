var mongoose = require('mongoose');

module.exports = function(){
    switch(this.env){
        case 'development':
            mongoose.connect('mongodb://localhost/dev');
            break;
        case 'production':
            mongoose.connect('');
            break;
    }   
}
