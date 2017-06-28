var db_utils = require('../../db/db_utils')


function handleRequest(req, res){

	var id = req.params.id
	var delete_sql = " delete from item where _id = '" + id  + "' " 


	db_utils.executeSQL(delete_sql, function(error, result){
		if (result) {
			return res.send({success:true, title:'Success', message:'Item delete successfully'});
		} else {
			return res.send({success:false, title:'Error', message:'DB error'});
		}
	});

}

module.exports.handleRequest = handleRequest;