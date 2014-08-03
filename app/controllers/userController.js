    var locomotive = require('locomotive')
        ,  Controller = locomotive.Controller
        , passport = require('passport');

    var User = require('../models/user');
    var Device = require('../models/device');

    var userController= new Controller();

    userController.dash = function(){
        //console.log(this.req.isAuthenticated());
        //if(!this.req.isAuthenticated())
        // return this.res.redirect('/login');

        this.title = 'CarSek - Dashboard';
        this.user = this.req.user;
        var self = this;
        Device.find(function(err, devices){
          self.devices = devices;
          self.render();
        });
    }

    userController.signup = function(){
        this.title = "Carsek - Signup";
        this.render();
    }

    userController.register = function(){
      var user = new User();
      user.email = this.param('email');
      user.password = this.param('password');
      user.name.first = this.param('name.first');
      user.name.last = this.param('name.last');
      
      var self = this;
      user.save(function(err){
        if(err)
          return self.redirect(self.urlFor({action: 'signup'}));

        return self.redirect('/login'); 
      });
    }

    module.exports = userController;