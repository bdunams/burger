// BURGER MODEL
var orm = require("../config/orm.js");

let movies = {
	show : function(callback){
      orm.selectAll(callback);
	},
	add : function(burger, callback){
      orm.insertOne(burger, callback);
	},
	update : function(name, id, callback){
      orm.updateOne(name, id, callback);
	}
};

module.exports = movies;