// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('landing#front');
  this.get('dashboard', 'user#dash');
  this.get('devices', function(req, res, next){ res.redirect('/dashboard')});
  this.get('devices/new', 'device#new');
  this.get('devices/:key', 'device#show');
  this.post('devices', 'device#create');
  this.get('signup', 'user#signup');
  this.post('signup', 'user#register');
  this.get('login', 'session#new');
  this.post('login', 'session#create');
  this.match('logout', 'session#destroy');
  this.match('external', 'landing#external');
  this.match('*a', 'landing#notfound');
}
