var locomotive = require('locomotive')
    ,   Controller = locomotive.Controller;

var userController= new Controller();

userController.dash = function(){
    this.title = 'CarSect - Dashboard';
    this.render();
}