var db_utils = require('../../db/db_utils')


function handleRequest(req, res){

	if (!req.body._id || !req.body._id.trim()) {
		return res.send({success:false, title:'Item id empty', message:'Item id empty'});
	}

	var item_data = {
		'item_name':req.body.item_name,
		'item_price':req.body.item_price,
		'item_quantity':req.body.item_quantity
	}

	// var update_sql = " update item set ? where _id = '" + req.body._id  + "' " 
	var update_sql = " UPDATE item set ? where _id = ? " 

	console.log("update_sql " + JSON.stringify(update_sql))

	db_utils.executeSQLWithObj(update_sql, [item_data, req.body._id ], function(error, result){
		if (result) {
			return res.send({success:true, title:'Success', message:'Item update successfully'});
		} else {
			return res.send({success:false, title:'Error', message:'DB error'});
		}
	});

}

module.exports.handleRequest = handleRequest;