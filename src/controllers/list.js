/* eslint-disable eqeqeq */
var express = require("express");
var router = express.Router();
var Models = require("../models");

router.get("/", async (req, res, next) => {
  // eslint-disable-next-line consistent-return
  try {
    await Models.Facility.findAll().then((facilities) => {
      if (facilities?.length == 0) {
        res.json({
          status: 404,
          message: "Facilities Not Found!",
          data: facilities,
        });
      } else if (facilities?.length > 0)
        res.json({ status: 200, data: facilities });
    });
  } catch (error) {
    if (error) throw error;
    res.json({ status: false, message: "Failed!" });
  }
});

module.exports = router;
