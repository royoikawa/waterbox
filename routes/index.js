var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/ph', function(req, res, next) {
  res.render('ph_table');
});
module.exports = router;
