var express = require('express');
var router = express.Router();
const crtlMain = require("../controllers/main");

/* GET home page. */
router.get('/', crtlMain.index);

module.exports = router;
