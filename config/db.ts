const mongoose = require("mongoose");
require('dotenv').config();
const db = process.env.DB;
const passwordDb=process.env.PASSWORDDB
const URI =`mongodb+srv://Deotyma:${passwordDb}@cluster0.uncn9.mongodb.net/${db}?retryWrites=true&w=majority`;

const MongoDBbooks = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                })

            client.then(() => {return console.log(`successfully connected to DB: ${db}`)})
            .catch((err)=> {console.log(err)})
        } catch(err) {
             throw Error(err)
        }
    }
}

module.exports = MongoDBbooks;