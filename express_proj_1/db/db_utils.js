var mysql = require('mysql')


var db_config = {
	host: "localhost",
	
	user: "root",
	password: "root",
	database:"test_schema"
}


var con = mysql.createConnection(db_config);

con.connect(function(err) {
  if (err){ 
  	console.log("=============DB connection error ============", JSON.stringify(err))
  	throw err;

  }
  console.log("Mysql Connected!");
});



function insertData(table, data, callback){
	var sql = " insert into " + table + " set ? ";
		con.query(sql, data, function(err, result){

		callback(err, result);
		
		console.log("err " + JSON.stringify(err))
		console.log("result " + JSON.stringify(result))
	});
}
module.exports.insertData = insertData;


function executeSQL(sql, callback){
	con.query(sql, function(err, result){

		callback(err, result);
		
		console.log("err " + JSON.stringify(err))
		console.log("result " + JSON.stringify(result))
	});
}
module.exports.executeSQL = executeSQL;


function executeSQLWithObj(sql, data, callback){
	con.query(sql, data, function(err, result){

		callback(err, result);
		
		console.log("err " + JSON.stringify(err))
		console.log("result " + JSON.stringify(result))
	});
}
module.exports.executeSQLWithObj = executeSQLWithObj;



