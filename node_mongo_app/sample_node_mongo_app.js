const mongoConnection = require('mongodb').MongoClient;

//mongoDB URl
const mongoURL = "mongodb://localhost:27017/userCred";
const mongoURL_2 = "mongodb://localhost:27017/;"

//create a new db
mongoConnection.connect(mongoURL, function(err, db){
	if(err) throw err;
	console.log('Database Created named userCred!');
	db.close();
});

//create collection/table
mongoConnection.connect(mongoURL_2, function(err, db){
	if(err) throw err;
	const connectToDB = db.db("userCred");
	connectToDB.createCollection("userCred_2", function(err, res){
		if(err) throw err;
		console.log("Collection Created Name userCred_2");
		db.close();
	});
});

//Insert data/record in created Table/Collection
mongoConnection.connect(mongoURL_2, function(err, db){
	if(err) throw err;
	const connectToDB = db.db("userCred");
	const recordObject = {
		name: "SLAMMMA JAAMAAA",
		phone_Number: 986544422,
		nuclearWarp: '212312asdasd121321'
	};
	connectToDB.collection("usersDetail").insertOne(recordObject, function(err, res){
		if (err) throw err;
		console.log("1 Document Record Entered!");
		db.close();
	});
});

//Insert multiple data/record in table/collection
mongoConnection.connect(mongoURL_2, function(err, db){
	if (err) throw err;
	const connectToDB = db.db("userCred");
	const recordObjects = [
	{
		name: "SLAMMMA",
		phone_Number: 12546346,
		nuclearWarp: '][].271912bajsda'
	},
	{
		name: "JAAMAAA",
		phone_Number: 8989674635,
		nuclearWarp: 'qweqfj1231231'
	},
	{
		name: "SLAMMMA JAAMAAA SLAAMAMAMA",
		phone_Number: 56756959569,
		nuclearWarp: 'zc,n9878adasd'
	}];

	connectToDB.collection("usersDetail").insertMany(recordObjects, function(err, res){
		if (err) throw err;
		console.log("Number of Document/record Entered: "+ res.insertedCount);
		db.close();
	});
})

//fetch first entry of data entered in the collection.
mongoConnection.connect(mongoURL_2, function(err, db){
	if (err) throw err;
	const connectToDB = db.db("userCred");
	connectToDB.collection("usersDetail").findOne({}, function(err, res){
		if (err) throw err;
		console.log(res.name);
		db.close();
	});
});

//fetch all data from the collection.
mongoConnection.connect(mongoURL_2, function(err, db){
	if(err) throw err;
	const connectToDB = db.db("userCred");
	connectToDB.collection("usersDetail").find({}).toArray( function(err, res){
		if (err) throw err;
		console.log(res);
		db.close();
	});
});