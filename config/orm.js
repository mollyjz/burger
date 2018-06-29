var connection = require("../config/connection.js");

function printQuestionMarks(number) { //print ? between each value being passed into mysql
	var array = [];  
	for (var i=0; i<number; i++) {
	  array.push("?");
	}
	//console.log(array);
	return array.toString();
}

function objToSql(object) { //setting new object's column values in mysql
	var arr = [];
	for (var key in object) { //for each key in the new object being passed in...
	  if (Object.hasOwnProperty.call(object, key)) { //if object has the specified key...
		arr.push(key + "=" + object[key]); //push that key to array`
		}
	}
	return arr.toString();
	console.log("array: " + arr) //nothing!!!!!!!!!!!!!!
}


var orm = {
  
  selectAll: function(table, callback) {
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, result) {
			//console.log(result);
			if (err) throw err;
	  callback(result);
    });
  },
	
/*
	insertOne: function(table, cols, vals, callback) {
		console.log(vals) //where is vals coming from???????
		console.log(vals[0])
		//SAYS 'DEVOURED' IS UNDEFINED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
		var queryString = "INSERT INTO " + table + " (" + cols.toString() + ")" + " VALUES (" + vals[0] + ", " + vals[1] + ")"; 
		console.log(queryString)
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			callback(result);
		});
	},
*/


  insertOne: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols.toString();
		queryString += ") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		//console.log(queryString)
		//console.log(printQuestionMarks(vals.length))
		queryString += ") ";
		console.log("queryString: " + queryString); //looks good, so why is there a mysql syntax error?!?!?!!!!
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			console.log("testing connection") //nothing!!!!!!!!!!!!!!!!!!!!!!!!
			callback(result);
			console.log(result)
		});
	},
  

  updateOne: function(table, colVals, condition, callback) {
		var condition = "id = " + req.params.id;
		var queryString = "UPDATE " + table;
		queryString += " SET ";
		queryString += objToSql(colVals);
		queryString += " WHERE ";
		queryString += condition;
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			callback(result);
		});
	},

};

module.exports = orm;