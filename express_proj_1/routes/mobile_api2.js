
var db_utils = require('../db/db_utils');



function insertDummyData(request, response) {

	var table = 'user';
	var data = {
		'name':'Adarsh',
		'email':'adarsh@test.com',
		'password':'123456',
		'token':'adasd',
		'mobile':'81018000000'
	}

	db_utils.insertData(table, data, function(error, result){

		if (result && result.insertId != 0) {
			response.send("Dummy iserted")
		}else {
			response.send("Failed")
		}
	});

	

}
module.exports.insertDummyData = insertDummyData;


