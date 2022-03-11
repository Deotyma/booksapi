const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const MongoDBbooks = require('../config/db.ts');
const booksRoutes = require('./routes/booksRoutes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.json();
});
booksRoutes(app);
app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`);
    MongoDBbooks.initialize();
});
