var express = require('express');
var router = express.Router();
var sql = require ('mssql');

/* GET home page. */
router.get('/', function(req, res, next) {
  var locationid = req.query.locationid;
  res.render('test')
})


module.exports = router;
