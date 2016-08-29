var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '渔人' });
});

/* GET CV page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: '关于我 | 渔人' });
});


module.exports = router;
