var shakes = require('../models/shakes'); 
 
// List of all shakes 
exports.shakes_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes list'); 
}; 
 
// for a specific shakes. 
exports.shakes_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes detail: ' + req.params.id); 
}; 
 
// Handle shakes create on POST. 
exports.shakes_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes create POST'); 
}; 
 
// Handle shakes delete form on DELETE. 
exports.shakes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes delete DELETE ' + req.params.id); 
}; 
 
// Handle shakes update form on PUT. 
exports.shakes_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes update PUT' + req.params.id); 
}; 