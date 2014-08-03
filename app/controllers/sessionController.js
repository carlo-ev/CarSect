    var locomotive = require('locomotive')
	    ,  Controller = locomotive.Controller
	    ,  passport = require('passport');

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
      passport.authenticate('local');
      console.log(this.req.isAuthenticated());
      if(!this.req.isAuthenticated())
	    return this.res.redirect('/login');
      return this.res.redirect('/dashboard');
	
    }

    module.exports = sessionController;