var locomotive = require('locomotive');
var Controller = locomotive.Controller;
   // ,   Phrases = require('../models/phrases');


var phrasesController = new Controller();

phrasesController.index = function(){
    this.title = "CarSek.io  - DB Test";
    this.render();
}
