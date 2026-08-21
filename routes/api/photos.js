const express = require("express");
const router = express.Router();
const photos = require("../../controllers/api/photos");

router.get("/photos", photos);

module.exports = router;
