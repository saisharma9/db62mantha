const mongoose = require("mongoose")
const shakesSchema = mongoose.Schema({
    flavour: String,
    size: String,
    cost: String
})
module.exports = mongoose.model("shakes", shakesSchema)