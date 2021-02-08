const User = require("../models/UserModel2");
const apiResponse = require("../helpers/apiResponse");
const auth = require("../middlewares/jwt");
var mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

exports.usersList = [
	// auth,
	function (req, res) {
		try {
			User.find({}).then((users)=>{
				if(users.length > 0){
					return apiResponse.successResponseWithData(res, "Operation success", users);
				}else{
					return apiResponse.successResponseWithData(res, "Operation success", []);
				}
			});
		} catch (err) {
			//throw error in json response with status 500.
			return apiResponse.ErrorResponse(res, err);
		}
	}
]
