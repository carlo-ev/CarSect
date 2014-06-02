var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Email = mongoose.SchemaTypes.Email;

var DeviceSchema = new Schema({
    title: String,
    key: {type: String, unique: true},
    email: {type: Email}
});

module.exports = mongoose.model('Device', DeviceSchema);