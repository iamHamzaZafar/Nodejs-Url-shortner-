const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema(
    {
        shortId:{
            type: String,
            required: true,
            unique: true
        } ,
        reDirectUrl:{
            type: String,
            required: true,
        
        } ,
        visitHistory: [{
            timestamps:{
                type: Number
            }
        }]

    }, 
    {
    timestamps: true,
});


const Url = mongoose.model('Url',urlSchema);

module.exports = Url;