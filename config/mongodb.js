module.exports = {
    MongoURI: "mongodb+srv://praneshaditya3:pK0r0ib69tCyQUzv@cluster0.es9mcig.mongodb.net/"
}

// // mongodb://127.0.0.1:27017/codeial

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/NodeJSAuthenticationApp');

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

db.once('open',function(){
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;
