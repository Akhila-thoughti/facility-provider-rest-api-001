/* eslint-disable no-unused-vars */

"use strict";

var moment = require("moment");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "facilities",
      [
        {
          facility_id: 1,
          facility_name: "Test Facility 1",
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          facility_status: "1",
        },
        {
          facility_id: 2,
          facility_name: "Test Facility 2",
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          facility_status: "1",
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {},
};
