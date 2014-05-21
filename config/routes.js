// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('landing#front');
  this.get('dashboarb', 'user#dash');
  this.match('lost', 'landing#notfound');
  this.match('login', 'session#new');
  this.match('logout', 'session#destroy');
  this.resources('session', { only : [ 'new', 'create', 'destroy'] } );
  this.resources('car');
  this.post('car/:id/open');
  this.post('car/:id/close');
  this.get('phrases', 'phrases#index');
}
