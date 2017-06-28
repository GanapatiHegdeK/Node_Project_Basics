var db_utils = require('../../db/db_utils')


function handleRequest(req, res){

	var sql = " select * from item ";
	db_utils.executeSQL(sql, function(error, result){
		if (!error && result.insertId != 0) {
			return res.send({success:true, title:'Success', message:'got data', data:result});
		} else {
			return res.send({success:false, title:'Error', message:'No data error'});
		}
	});

}

module.exports.handleRequest = handleRequest;