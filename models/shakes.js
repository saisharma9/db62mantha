const mongoose = require("mongoose")
const shakesSchema = mongoose.Schema({
    flavour:{
        type: String,
        minLength: 10
    }, 
     size: {
        type: String,
        minLength: 11
     },

    cost: String
})
module.exports = mongoose.model("shakes", shakesSchema)