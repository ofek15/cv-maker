const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: {type:String, required: true, unique: true},
    password: {type:String, required: true},
    email: {type:String, required: true},
    info: {type: mongoose.Types.ObjectId, ref: "info"}    
})

module.exports=mongoose.model("user", user)