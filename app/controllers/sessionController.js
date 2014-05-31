var locomotive = require('locomotive')
	,  Controller = locomotive.Controller;

var sessionController = new Controller();

sessionController.new = function(){
    this.title = "CarSect - Login";
    this.render();
}

sessionController.destroy = function(){
  this.req.logout();
  this.redirect(rootPath);
}

sessionController.create = function(){
  passport.authenticate('local', {
	successRedirect: this.redirect('/dashboard'),
	failureRedirect: this.redirect('/login')
  })(this.__req, this.__res, this.__next);
  this.redirect('/dashboard');
}

module.exports = sessionController;
