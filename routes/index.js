var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '渔人' });
});

/* GET CV page. */
router.get('/CV', function(req, res, next) {
  res.render('cv', { title: '关于我|宋进忠' });
});


module.exports = router;
