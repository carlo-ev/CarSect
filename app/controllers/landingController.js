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

landingController.external = function(){
  var self = this;
  var reqOptions = {
    host: self.param('host'),
    port: 80,
    path: self.param('path')
  };
  http.get(reqOptions, function(resp){
      resp.setEncoding('utf8');
      resp.on('data', function(chunks){
        self.resp.write(chunks);
      });
  });
}

module.exports = landingController;