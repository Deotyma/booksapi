const mongoose = require("mongoose");
const DB = "books";
const URI =`mongodb+srv://Deotyma:Mam2koty@cluster0.uncn9.mongodb.net/${DB}?retryWrites=true&w=majority`;


const MongoDBbooks = {
    initialize: () => {
        try {
            const client = mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, 
                    useUnifiedTopology: true
                })

            client.then(() => {return console.log(`successfully connected to DB: ${DB}`)})
            .catch((err)=> {console.log(err)})
        } catch(err) {
             throw Error(err)
        }
    }
}

module.exports = MongoDBbooks;