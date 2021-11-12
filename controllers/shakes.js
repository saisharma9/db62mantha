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
exports.shakes_create_post = async function (req, res) {
    console.log(req.body)
    let document = new shakes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"flavour":"goat", "cost":12, "size":"large"}
    document.flavour = req.body.flavour; 
    document.size = req.body.size; 
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
 
// Handle shakes delete form on DELETE. 
exports.shakes_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: shakes delete DELETE ' + req.params.id); 
}; 
 
// Handle shakes update form on PUT. 
exports.shakes_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await shakes.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.flavour)  
               toUpdate.flavour = req.body.flavour; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 

// for a specific shakes. 
exports.shakes_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await shakes.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 