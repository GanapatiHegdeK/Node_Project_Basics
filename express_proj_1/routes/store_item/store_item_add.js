var db_utils = require('../../db/db_utils')


function handleRequest(req, res){

	if (!req.body.item_name || !req.body.item_name.trim()) {
		return res.send({success:false, title:'Item name empty', message:'Item name empty'});
	}
	if (!req.body.item_price || !req.body.item_price.trim()) {
		return res.send({success:false, title:'Item price empty', message:'Item price empty'});
	}
	if (!req.body.item_quantity || !req.body.item_quantity.trim()) {
		return res.send({success:false, title:'Item quantity empty', message:'Item name empty'});
	}


	var item_data = {
		'item_name':req.body.item_name,
		'item_price':req.body.item_price,
		'item_quantity':req.body.item_quantity
	}


	db_utils.insertData('item', item_data, function(error, result){
		if (!error && result.insertId != 0) {
			return res.send({success:true, title:'Success', message:'Item saved successfully'});
		} else {
			return res.send({success:false, title:'Error', message:'DB error'});
		}
	});

}

module.exports.handleRequest = handleRequest;