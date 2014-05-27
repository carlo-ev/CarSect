var locomotive = require('locomotive')
    ,   Controller = locomotive.Controller
    ,   Phrases = require('../models/phrases');


var phrasesController = new Controller();

phrasesController.index = function(){
    var phrases = new Phrases();
    this.title = "CarSek  - DB Test";
    if(this.param['flag'] === 1){
        phrase.id = 1;
        phrase.title = "Test Phrase";
        phrase.body = "This is just a test phrase";
        phrase.save(function(err){
            if(err)
                console.log(err);
        });
        this.phrases = [];
    }else{
        var self = this;
        phrase.find({}, function(err, ps){
            self.phrases = ps;
        });
    }
    this.render(this.phrases);
}
