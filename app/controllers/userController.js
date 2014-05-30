var locomotive = require('locomotive')
    ,  Controller = locomotive.Controller
    , passport = require('passport');

var User = require('../model/user');

var userController= new Controller();

userController.dash = function(){
    this.title = 'CarSek - Dashboard';
    this.render();
}

userController.signup = function(){
    this.title = "Carsek - Signup";
    this.render();
}

userController.register = function(){
  var user = new User();
  account.email = this.param('email');
  account.password = this.param('password');
  account.name.first = this.param('name.first');
  account.name.last = this.param('name.last');
  
  var self = this;
  account.save(function(err){
    
  });
  //save on db and make session blah blah
  this.redirect("/dashboard");
}

module.exports = userController;