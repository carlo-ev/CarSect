var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;
var http = require('http');

var landingController = new Controller();

landingController.front = function(){
	this.title = "CarSek.io - Your Car in Reach, Always";
	this.render();
}

landingController.notfound = function(){
	this.title = "CarSek.io - 404 Not Found";
	this.render();
}

module.exports = landingController;