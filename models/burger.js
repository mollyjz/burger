var orm = require("../config/orm.js");


var burger = {

    selectAll: function(callback) {
      orm.selectAll("burgers", function(res) {
        //console.log("selected " + res);
        callback(res);
      });
    },

    insertOne: function(cols, vals, callback) {
      orm.insertOne("burgers", cols, vals, function(res) {
        //console.log("inserted " + res);
        callback(res);
      });
    },

    updateOne: function(colVals, condition, callback) {
      orm.updateOne("burgers", colVals, condition, function(res) {
        //console.log("updated " + res);
        callback(res);
      });
    }
  };

  
module.exports = burger;