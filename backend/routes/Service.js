const express = require("express");

const router = express.Router();

const {
  getServices,
} = require("../controllers/ServiceController");

router.get("/", getServices);

module.exports = router;