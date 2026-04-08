const express = require("express");
const router = express.Router();
const { getProfile } = require("../controllers/profile.controller.js");
router.get("/profile", getProfile);
router.get("/profile-new", (req, res) => {
  res.send("This is the new profile endpoint is staging 🚀");
});
module.exports = router;