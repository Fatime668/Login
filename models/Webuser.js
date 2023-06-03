const { default: mongoose } = require("mongoose");
const webUserSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String
})

const Webuser = mongoose.model('WebUser',webUserSchema)

module.exports=({
    Webuser
})