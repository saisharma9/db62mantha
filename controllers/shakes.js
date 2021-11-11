var shakes = require('../models/shakes'); 
 
// List of all shakes 
exports.shakes_list = async function(req, res) { 
    try{ 
        theshakes = await shakes.find(); 
        res.send(theshakes); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.shakes_view_all_Page = async function(req, res) { 
    try{ 
        theshakes = await shakes.find(); 
        res.render('shakes', { title: 'Shakes Search Results', results: theshakes }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
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