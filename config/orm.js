// APP ORM
const connection = require('./connection').burgersDB;

let tableName = "burgers";

let orm {
  
  selectAll: function(callback){
    
    let s = 'SELECT * FROM ' + tableName;
    
    connection.query(s, function(err, result) {

      callback(result);

    });
  },
  
  insertOne: function(burger, callback){
    // Query 
    let s = "INSERT INTO " + tableName + " (name, devoured) VALUES (?,?)";
    // Default value of false 
    burger.devoured = burger.devoured || false;
    
    connection.query(s, [burger.name, burger.devoured], function(err, result) {

      callback(result);

    });
  },
  
  updateOne: function(name, id, callback){
    
    let s = "UPDATE " + tableName + " SET devoured=? WHERE id=?";

    connection.query(s, [name, id], function(err, result) {

      callback(result);

    });
  }
}


module.exports = orm;