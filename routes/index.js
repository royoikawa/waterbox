var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/map', function(req, res, next) {
  res.render('index');
});
router.get('/ph', function(req, res, next) {
  res.render('ph_table');
});
router.get('/chart',function(req, res, next){
  console.log(req.query.chart);
  res.render('chart',{'query':req.query.chart});
});
router.get('/ppm',function(req, res, next){
  res.render('ppm_table');
})
module.exports = router;
