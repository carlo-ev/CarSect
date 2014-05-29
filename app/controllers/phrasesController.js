var locomotive = require('locomotive')
    ,   Controller = locomotive.Controller
    ,   Phrases = require('../models/phrases');


var phrasesController = new Controller();

phrasesController.index = function(){
    //var phrase = new Phrases();
    this.title = "CarSect  - DB Test";
    console.log(this.params);
    this.render();
}