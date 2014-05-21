var locomotive = require('locomotive')
    ,  Controller = locomotive.Controller;

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
  //save on db and make session blah blah
  this.redirect("/dashboard");
}

module.exports = userController;