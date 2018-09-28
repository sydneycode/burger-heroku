// Require the npm mysql package (in order to connect 
// to a MySQL database using Node.js)
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

// Connect Node to MySQL
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection to the database burger_db (in order 
// to use it with ORM)
module.exports = connection;