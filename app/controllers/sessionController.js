var locomotive = require('locomotive')
	,  Controller = locomotive.Controller;

var sessionController = new Controller();

sessionController.new = function(){
    this.title = "CarSect - Login";
    this.render();
}

sessionController.destroy = function(){
  //delete user cookkie with passport blah blah 
  this.redirect(rootPath);
}

sessionController.create = function(){
  //loggin user blah blah with passport
  this.redirect('/dashboard');
}

module.exports = sessionController;
