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

landingController.exRequest = function(){
    console.log("To param:"+this.param('to'));
    var reqOptions = {
        host: '198.199.114.228',
        port: 8080,
        path: '/devices?key=0DA79230&to='+this.param('to')
    };
    var self = this;
    http.get(reqOptions, function(resp){
        resp.setEncoding('utf8');
        resp.on('data', function(chunk){
            console.log("Response: "+chunk);
            self.resp = chunk;
            self.render();
        });
    }).on('error', function(e){
        console.log(e.message);
    });
}

module.exports = landingController;
