var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shakes', { title: 'Search Results shakes' });
});

module.exports = router;