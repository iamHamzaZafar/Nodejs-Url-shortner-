const mongoose = require('mongoose');



const connectDB = async () =>{
    try {
      await   mongoose.connect('mongodb+srv://imhamzee:Hamza123@cluster0.w0sh9aw.mongodb.net/urlShortner') ;
        console.log("Mongo DB connection success");
    } catch (error) {
        console.log("Mongo DB connection error" , error);
    }
}


module.exports = {
    connectDB
}