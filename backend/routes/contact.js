const express = require("express");

const router = express.Router();

const { createContact } = require("../controllers/contactcontroller");

router.post("/", createContact);

module.exports = router;