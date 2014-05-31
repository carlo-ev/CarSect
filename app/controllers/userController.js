var locomotive = require('locomotive')
    ,  Controller = locomotive.Controller
    , passport = require('passport');

var User = require('../models/user');

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
  console.log("Register");
  console.log(this.param('first.name'));
  var user = new User();
  user.email = this.param('email');
  user.password = this.param('password');
  user.name.first = this.param('name.first');
  user.name.last = this.param('name.last');
  
  var self = this;
  user.save(function(err){
	console.log(err);
  	if(err)
	  return self.redirect(self.urlFor({action: 'signup'}));

	return self.redirect('/login'); 
  });
}

module.exports = userController;
