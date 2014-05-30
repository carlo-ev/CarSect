var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;
var Phrases = require('../models/phrases');

var landingController = new Controller();

landingController.front = function(){
	this.title = "CarSek.io - Your Car in Reach, Always";
	this.render();
}

landingController.notfound = function(){
	this.title = "CarSek.io - 404 Not Found";
	this.render();
}

landingController.back = function(){
	var elements;
	Phrases.find({}, function(err, phrases){
		console.log(err);
		elements = console.log(phrases);
	});
	this.elements = elements;
	this.title = 'test';
	this.render();
}

module.exports = landingController;
