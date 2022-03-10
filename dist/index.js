"use strict";
const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.json();
});
app.listen(port, () => {
    console.log(`Application exemple à l'écoute sur le port ${port}!`);
});
