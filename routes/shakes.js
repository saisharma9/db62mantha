var express = require('express');
const shakes_controlers= require('../controllers/shakes');
var router = express.Router();

/* GET shakes */ 
router.get('/', shakes_controlers.shakes_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shakes', { title: 'Search Results shakes' });
});

module.exports = router;

