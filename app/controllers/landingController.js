var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;

var landingController = new Controller();

landingController.front = function(){
	this.title = "CarSek: Your Car in Reach, Always";
	this.render();
}

module.exports = landingController;
