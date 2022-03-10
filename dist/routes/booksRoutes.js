"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    const Book = require('../models/booksModel');
    app.post('/api/books/register', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            title: req.body.title,
            author: req.body.author,
            edition_year: req.body.edition_year,
            creationDate: new Date()
        };
        const book = yield Book(data);
        const resultBook = yield book.save();
        res.json({ status: 200, result: resultBook });
    }));
    app.get('/api/books/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const allBooks = yield Book.find({});
        res.json({ status: 200, result: allBooks });
    }));
    app.get('/api/books/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const oneBook = yield Book.find({ _id: id });
        res.json({ status: 200, result: oneBook[0] });
    }));
    app.put('/api/books/update/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const data = {
            title: req.body.title,
            author: req.body.author,
            edition_year: req.body.edition_year
        };
        const updatedBook = yield Book.updateOne({ _id: id }, data);
        res.json({ status: 200, result: updatedBook });
    }));
    app.delete('/api/books/delete/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const deletedBook = yield Book.deleteOne({ _id: id });
        res.json({ status: 200, result: deletedBook });
    }));
};
