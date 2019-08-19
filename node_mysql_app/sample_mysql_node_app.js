var sql = require('mysql');

//setting up the initials required for making a connection with myslq server.
var connection = sql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Ujjwal@123'
});

//estabish the connection with mysql server
connection.connect(function(err) {
	if(err) throw err;
	console.log("MySql Server Connected!");
});

//create a new database with a condition to check if the DB exists or not
connection.connect(function(err){
	if(err) throw err;
	connection.query("use userCred", function(err, result){
		if(err) throw err;
		connection.query("CREATE DATABASE userCred", function(err, result){
			if(err) throw err;
			console.log("Database Created Named userCred");
		});
	});
});

//create a new table.
connection.connect(function(err){
	if(err) throw err;
	const sqlQuery = "CREATE TABLE usersDetail (name VARCHAR(30), phone_Number int(15))";
	connection.query(sqlQuery, function(err,result){
		if (err) throw err;
		console.log("Table Created named usersDetail");
	});
});

//insert values into table.
connection.connect(function(err){
	if (err) throw err;
	const sqlQuery = "INSERT INTO usersDetail (name,phone_Number) VALUES ('Stuart Little', 69856998555)";
	connection.query(sql, function(err, result){
		if (err) throw err;
		console.log("Inserted new value in Table usersDetail");
	});
});
//fetch values from table.


//edit values inside the table.
