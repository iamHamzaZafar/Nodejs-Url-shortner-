const express = require('express');
const urlRoute = require('./routes/url')
const {connectDB} = require('./connect')

const URL = require('./models/url')

const app =express() ;
const PORT=8000 ;

connectDB()
.then(() =>{
    console.log('Database connected')
})


app.use(express.json());
app.use('/url', urlRoute) ;

app.get('/:shortID' , async (req, res) =>{
    const shortID = req.params.shortID ;
  const entry =   await URL.findOneAndUpdate({
        shortID: shortID
    },
    {
        $push:{
            visitHistory:{
                timestamps: Date.now()
            }
        }
    }
) ;

res.redirect(entry.reDirectUrl) ;
    
})




app.listen(PORT, function (req, res) {
    console.log(`Server listening at port ${PORT}`);
})