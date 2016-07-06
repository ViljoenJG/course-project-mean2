var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Message', schema);