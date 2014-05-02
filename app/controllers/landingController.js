var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;

var landingController = new Controller();

landingController.front = function(){
	this.title = "CarSek: Your Car in Reach, Always";
	this.page = 'front';
	this.render();
}

landingController.notfound = function(){
	this.title = "404 - Not Found";
	this.render();
}

module.exports = landingController;
