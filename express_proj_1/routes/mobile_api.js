
var db_utils = require('../db/db_utils');

var users = [
	{user_id:1, user_name:"amit", password:"123456", token:"qwewq"},
	{user_id:2, user_name:"abhi", password:"654321", token:"abhi654321"},
	{user_id:3, user_name:"pooja", password:"111222", token:"pooja111222"},
	{user_id:4, user_name:"Ramya", password:"112233", token:"Ramya112233"},
	{user_id:5, user_name:"Rdhi", password:"332211", token:"Radhi332211"}
]





function login(request, response) {


	var user_name = request.body.user_name;
	var password = request.body.password;



	if (!user_name || !user_name.trim() || !password || !password.trim()) {
		return response.send({"success":false, title:"Failed", message:"Username or password empty"})
	}


	var user_from_db;
	for (var i = users.length - 1; i >= 0; i--) {
		if(user_name == users[i].user_name){
			user_from_db = users[i];
			break;
		}
	}

	if (!user_from_db) {
		return response.send({"success":false, title:"Failed", message:"No user found"})
	}

	if ( user_from_db.password == password) {
		return response.send({"success":true, title:"Success", 
			message:"Login Success",
			data:user_from_db
		});
	} else {
		return response.send({"success":false, title:"Failed", message:"Username or password mismatch"})
	}
}

module.exports.login = login;




function get_my_cart(req, res){

	var user_id = req.headers.user_id;
	var token = req.headers.token;
	if (!user_id || !user_id.trim() || !token || !token.trim()) {
		return res.status(401).send()
	}

	var user_from_db;
	for (var i = users.length - 1; i >= 0; i--) {
		if(user_id == users[i].user_id){
			user_from_db = users[i];
			break;
		}
	}

	if (!user_from_db) {
		return res.send({"success":false, title:"Failed", message:"No user found"})
	}


	if ( token != user_from_db.token) {
		return res.status(401).send()
	}



	res.send({items: [
		{"item":"book"},
		{"item":"pen"},
		{"item":"laptop"},
		{"item":"pencil"}
		]
	});
}
module.exports.get_my_cart = get_my_cart;







