const express = require("express");

const router = express.Router();

const { getFaq } = require("../controllers/faqcontroller");

router.get("/", getFaq);

module.exports = router;