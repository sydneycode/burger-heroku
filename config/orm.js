// Require the connection to the database
var connection = require("../config/connection.js");

// Methods that will execute the necessary MySQL commands 
// in the controllers in order to retrieve and store data 
// in the database
var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function(err, result) {
            if (err) {
                throw err;
            }
        cb(result);
        });
    },
    insertOne: function(table, col, val, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) {
                throw err;
            }
        cb(result);
        });
    },
    updateOne: function(table, col, val, condition, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE " + condition;
        connection.query(queryString, [table, col, val], function(err, result) {
            if (err) {
                throw err;
            }
        cb(result);
        });
    }
}

// Export the ORM object for use by the model
module.exports = orm;