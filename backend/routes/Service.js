const express = require("express");

const router = express.Router();

const {
  getServices,
} = require("../controllers/servicecontroller");

router.get("/", getServices);

module.exports = router;