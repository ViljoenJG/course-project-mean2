var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/user');

var schema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function (messageDoc) {
   User.findById(messageDoc.user, function (err, doc) {
       doc.messages.pull(messageDoc);
       doc.save();
   })
});

module.exports = mongoose.model('Message', schema);