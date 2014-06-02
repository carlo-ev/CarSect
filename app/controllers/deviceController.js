var locomotive = require('locomotive')
    ,   Controller = locomotive.Controller
    ,   http = require('http');

var Device = require('../models/device');

var deviceController = new Controller();

deviceController.new = function(){
    this.title = 'Carsek - Register New Device';
    this.render();
}

var extRequest = function(state, context){
    var reqOptions = {
        host: '198.199.114.228',
        port: 8080,
        path: '/devices?key=0DA79230&to='+state
    };
    http.get(reqOptions, function(resp){
        resp.setEncoding('utf8');
        resp.on('data', function(chunk){
            console.log(chunk);
        });
    });
}

deviceController.show = function(){
    this.title = 'Carsek - Device Control Center';
    if(this.param('to')){
        extRequest(this.param('to'), this);
        this.resp = this.param('to');
    }
    
    var self = this;
    Device.find({key: this.param('key')}, function(err, device){
        self.device = device[0];
        self.render();
    });
}

deviceController.create = function(){
    var device = new Device();
    device.title = this.param('title');
    device.key = this.param('key');
    device.email = this.param('email');

    var self = this;
    device.save(function(err){
        if(err)
            return self.redirect(self.urlFor({action: 'new'}));

        return self.redirect('/dashboard');
    });
}

module.exports = deviceController;