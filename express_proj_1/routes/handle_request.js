var db_utils = require('../db/db_utils')

function login(request, response) {
	var result = {
		'title':'Title from Control'
	}

	response.render('login', result);
}

module.exports.login = login;



function handle_login(request, response) {

	console.log(" request.body " + JSON.stringify(request.body))

	var user_name = request.body.user_name;
	var password = request.body.password;

	console.log(user_name)
	console.log(password)

	response.render('login');
}
module.exports.handle_login = handle_login;


function render_signup(request, response){
	response.render('signup')

}
module.exports.render_signup = render_signup;



function perform_signup(request, response){

	console.log(" body " + JSON.stringify(request.body));

	var table = "user";
	var data = {
		'name':request.body.name,
		'password':request.body.password,
		'token':request.body.password,
		'email':request.body.email,
		'mobile':request.body.mobile
	}

	db_utils.insertData(table, data, function(error, result){
		if (!error && result.insertId != 0) {
			response.send({message:"Signup success"});
		}else {
			response.send({message:"Signup faile"});
		}
	});


	

}
module.exports.perform_signup = perform_signup;






