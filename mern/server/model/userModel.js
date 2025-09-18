const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username : {type : String , required : true},
    email : {type : String , required : true},
    password : {type : String , required :  true},
    address : {type : String , required : true}
},{timestamps:true})

const LabUser = mongoose.model("LabUser" , userSchema)

module.exports = LabUser;