var db_utils = require('../../db/db_utils')


function handleRequest(req, res){

	if (!req.body.student) {
		return res.send({success:false, title:'Student object is empty', message:'Student object is empty'});
	}

	if (!req.body.parent) {
		return res.send({success:false, title:'parent object is empty', message:'parent object is empty'});
	}
	
	if (!req.body.student.name || !req.body.student.name.toString().trim()) {
		return res.send({success:false, title:'Student name is empty', message:'student name is empty'});
	}	
	if (!req.body.parent.name || !req.body.parent.name.toString().trim()) {
		return res.send({success:false, title:'parent name is empty', message:'parent name is empty'});
	}
	
	if (!req.body.parent.mobile || !req.body.parent.mobile.trim()) {
		return res.send({success:false, title:'parent mobile is empty', message:'parent mobile is empty'});
	}
	





	var parent_data = {
		'parent_name':req.body.parent.name,
		'parent_mobile':req.body.parent.mobile
	}

	var student = {
		'student_name':req.body.student.name
	}


	db_utils.insertData('parent', parent_data, function(error, result){
		if (!error && result.insertId != 0) {

			student.fk_parent_id = result.insertId;
			db_utils.insertData('STUDENT', student, function(student_error, student_result){
				if (!student_error && student_result.insertId != 0) {
					return res.send({success:true, title:'Success', message:'Student saved '});
				} else {
					return res.send({success:false, title:'Error', message:'DB error'});
				}
			});

		} else {
			return res.send({success:false, title:'Error', message:'DB error'});
		}
	});

}

module.exports.handleRequest = handleRequest;


// Method : POST
// Url : /mobile_api/admin/student/add
// Body: 
// {
// 	"student":{
// 		"name":"Raja"
// 	},
// 	"parent":{
// 		"name":"Rahul",
// 		"mobile":"09000000000"
// 	}
// }



