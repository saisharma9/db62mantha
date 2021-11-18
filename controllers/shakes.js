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
  
// Handle shakes delete on DELETE. 
exports.shakes_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await shakes.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
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

// Handle a show one view with id specified by query 
exports.shakes_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await shakes.findById( req.query.id) 
        res.render('shakesdetail',  
{ title: 'shakes Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

 // Handle building the view for creating a shakes. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.shakes_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('shakescreate', { title: 'shakes Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle shakes create on POST. 
exports.shakes_create_post = async function (req, res) {
    console.log(req.body)
    let document = new shakes();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    
    document.flavour = req.body.flavour; 
    document.cost = req.body.cost; 
    document.size = req.body.size;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle building the view for updating a shakes. 
// query provides the id 
exports.shakes_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await shakes.findById(req.query.id) 
        res.render('shakesupdate', { title: 'shakes Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.shakes_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await shakes.findById(req.query.id) 
        res.render('shakesdelete', { title: 'shakes Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 