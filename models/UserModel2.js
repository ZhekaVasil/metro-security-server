var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	fullName: {type: String, required: true},
}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);
