var express = require('express');
const shakes_controlers= require('../controllers/shakes');
var router = express.Router();

// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET shakes */ 
router.get('/', shakes_controlers.shakes_view_all_Page );
module.exports = router;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shakes', { title: 'Search Results shakes' });
});

/* GET detail shakes page */ 
router.get('/detail', shakes_controlers.shakes_view_one_Page); 

/* GET create shakes page */ 
router.get('/create',secured, shakes_controlers.shakes_create_Page); 

/* GET create update page */ 
router.get('/update',secured, shakes_controlers.shakes_update_Page); 

/* GET create shakes page */ 
router.get('/delete',secured, shakes_controlers.shakes_delete_Page); 

module.exports = router;

