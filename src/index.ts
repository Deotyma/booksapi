const express = require('express');
const app = express();
require('dotenv').config();
const port = parseInt(process.env.PORT as string, 10) || 5000;
const bodyParser = require('body-parser');
const MongoDBbooks = require('../config/db.ts');
const booksRoutes = require('./routes/booksRoutes');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('build'));


app.get('/', (req: Request, res: Response)=> {
    res.json({status: 200, msg:"It works"})
})

booksRoutes(app)

app.listen(port, ()=>{
    console.log(`Application exemple à l'écoute sur le port ${port}!`)
    MongoDBbooks.initialize();
})