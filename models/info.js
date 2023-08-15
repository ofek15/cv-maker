const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const info = new Schema({
    name: {type: String},
    email: {type: String},
    userImg: {type: String},
    phone: {type: String},
    address: {type: String},
    education: [{
        startyear: {type: String},
        endyear: {type: String},
        degree: {type: String},
        institution: {type: String}
    }],
    experience: [{
        startyear: {type: String},
        endyear: {type: String},
        company: {type: String},
        title: {type: String}
    }],
    skills: [{
        skill1:{type: String},
    }],
    languages:[{
        lang:{type: String},
        level: {type: String}
    }], 
    hobbies: {type: String},
    freewords: {type: String},
})

module.exports=mongoose.model("info", info)