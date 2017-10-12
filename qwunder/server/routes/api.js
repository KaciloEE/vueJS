var express = require('express');
var router = express.Router();
var apiCtrl = require('../controllers/test');

/* GET home page. */
router.get('/', apiCtrl.show1);

module.exports = router;
