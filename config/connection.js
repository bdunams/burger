// Database Connections
//const Promises = require('bluebird');
const MySQL = require('mysql');

//Promises.promisifyAll(require("mysql/lib/Connection").prototype);
//Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let burgers = MySQL.createConnection({
	host: "us-cdbr-iron-east-05.cleardb.net",
	user: "b61ad89695c8ae",
	password: "b2b97a1e",
	database: "heroku_bb28dc4dd6f621c"
});

let allConnections = {
	'burgersDB' : burgers
};

module.exports = allConnections;