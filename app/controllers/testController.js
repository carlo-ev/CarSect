var locomotive = require('locomotive')
    ,   Controller = locomotive.Controller
    ,   http = require('http');

var testController = new Controller();

testController.exRequest = function(){
    var reqOptions = {
        host: '198.199.114.228',
        port: 80,
        path: '/devices?key=0DA79230'
    };
    var self = this;
    http.get(reqOptions, function(resp){
        resp.on('data', function(chunk){
            //self.render(chunk);
            console.log(chunk);
        });
    }).on('error', function(e){
        console.log(e.message);
    });
}