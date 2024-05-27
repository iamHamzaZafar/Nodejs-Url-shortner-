const express = require('express');

const app =express() ;
const PORT=8000 ;

app.get('/',(req , res)=>{
    res.send("Hello, world!");
})



app.listen(PORT, function (req, res) {
    console.log(`Server listening at port ${PORT}`);
})