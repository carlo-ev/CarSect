var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;

var landingController = new Controller();

landingController.front = function(){
	this.title = "CarSect - Your Car in Reach, Always";
	this.render();
}

landingController.notfound = function(){
	this.title = "CarSect - 404 Not Found";
	this.render();
}

module.exports = landingController;
