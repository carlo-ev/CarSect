var util = require('util');

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  this.set('views', __dirname + '/../../app/views');
  this.set('view engine', 'jade');
  this.engine('jade', require('jade').__express);
  this.set('view options', {layout: false});
  this.format('html', {extension: '.jade'});
  this.datastore(require('locomotive-mongoose'));
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }
}