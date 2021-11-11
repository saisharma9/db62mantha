var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var shakes_controller = require('../controllers/shakes'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// shakes ROUTES /// 
 
// POST request for creating a shakes.  
router.post('/shakes', shakes_controller.shakes_create_post); 
 
// DELETE request to delete shakes. 
router.delete('/shakes/:id', shakes_controller.shakes_delete); 
 
// PUT request to update shakes. 
router.put('/shakes/:id', 
shakes_controller.shakes_update_put); 
 
// GET request for one shakes. 
router.get('/shakes/:id', shakes_controller.shakes_detail); 
 
// GET request for list of all shakes items. 
router.get('/resource/shakes', shakes_controller.shakes_list); 
 
module.exports = router;