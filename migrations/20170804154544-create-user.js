"use strict";
module.exports = {
  up: function(queryInterface, Sequelize) {
    return;
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("Users");
  }
};
