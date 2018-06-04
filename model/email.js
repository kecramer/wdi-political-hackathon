const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const EmailSchema = new Schema({
	email: String,
	reminder_30day: Boolean,
	reminder_7day: Boolean,
   reminder_1day: Boolean,
})

const Email = mongoose.model('Email', EmailSchema);

module.exports = Email;
