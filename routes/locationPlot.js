var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/delta', function(req, res, next) {
  var locationid = req.query.locationid;

  res.render('deltas');
});



router.get('/calibrations', function(req, res, next) {
  var locationid = req.query.locationid;

  res.render('calibrations');
});

module.exports = router;
