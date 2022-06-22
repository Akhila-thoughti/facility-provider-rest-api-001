/* eslint-disable no-unused-vars */

"use strict";

// eslint-disable-next-line node/no-extraneous-require
var moment = require("moment");
var bcrypt = require("bcrypt");
const BCRYPT_SALT_ROUNDS = 12;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          user_id: 1,
          facility_id: 1,
          user_email: "admin@gmail.com",
          username: "admin",
          role_id: "1",
          password: bcrypt.hashSync("admin@#123", BCRYPT_SALT_ROUNDS),
          created_at: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
          updated_at: null,
          deleted_at: null,
          user_status: "1",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {},
};
