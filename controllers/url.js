const {nanoid} = require('nanoid');


const Url = require('../models/url')


async function generateNewShortUrl(req , res ){
    const body = req.body ;
    if(!body.Url) return res.status(400).jsoon({
        error : 'Url is required'
    });
    const shortId= nanoid(8) ;


    await Url.create({
        shortId : shortId,
        reDirectUrl: body.Url,
        visitHistory : []
    });


    return res.json({id: shortId})
}



module.exports ={
    generateNewShortUrl
}