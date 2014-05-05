var locomotive = require('locomotive')
	,	Controller = locomotive.Controller;

var sessionController = new Controller();

sessionController.new = function(){
    this.title = "CarSect - Login";
    this.render();
}

sessionController.destroy = function(){
}

sessionController.create = function(){
}

module.exports = sessionController;
