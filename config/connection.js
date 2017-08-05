// Database Connections
const Promises = require('bluebird');
const MySQL = require('mysql');

Promises.promisifyAll(require("mysql/lib/Connection").prototype);
Promises.promisifyAll(require("mysql/lib/Pool").prototype);

let burgers = MySQL.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Mutlaq66",
	database: "burgers_db"
});

let allConnections = {
	'burgersDB' : burgers
};

module.exports = allConnections;