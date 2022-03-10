"use strict";
const Mongoose = require('mongoose');
const bookSchema = new Mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    edition_year: { type: Number, required: false },
    creationDate: { type: Date, required: true }
}, { collection: "books" });
module.exports = Mongoose.model('book', bookSchema);
