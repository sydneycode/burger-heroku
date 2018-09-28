// Import ORM into the burger model
var orm = require("../config/orm.js");

var burger = {
    // call the ORM functions using burger specific input for the ORM
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    insertOne: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        })
    },
    updateOne: function(col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            cb(res);
        })
    }
}

// Export the burger model
module.exports = burger;