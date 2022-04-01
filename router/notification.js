const express = require("express");
const router = express.Router();

const { Authenticate } = require("../middleware/Authenticate");
const { Validator } = require("../middleware/Validator");

const {
  GetNotification,
  MarkNotification,
} = require("../controllers/notification/index");

router.get("/all", Authenticate, Validator, GetNotification);
router.post("/mark_read", Authenticate, Validator, MarkNotification);

module.exports = router;
