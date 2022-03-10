import {Express, Request, Response} from 'express';

module.exports = (app: Express) =>{
    const Book: any = require('../models/booksModel')

    app.post('/api/books/register', async (req: Request, res: Response)=> {

        const data = {
            title: req.body.title,
            author: req.body.author,
            edition_year: req.body.edition_year,
            creationDate: new Date()
        }

        const book = await Book(data);
        const resultBook = await book.save();

        res.json({status: 200, result: resultBook})


    })

    app.get('/api/books/all', async (req: Request, res: Response)=> {

        const allBooks = await Book.find({});

        res.json({status: 200, result: allBooks})
    })

    app.get('/api/books/:id', async (req: Request, res: Response)=> {
        const id = req.params.id;

        const oneBook = await Book.find({_id: id});

        res.json({status: 200, result: oneBook[0]})
    })

    app.put('/api/books/update/:id', async (req, res)=> {
        const id = req.params.id;

        const data = {
            title: req.body.title,
            author: req.body.author,
            edition_year: req.body.edition_year
        }

        const updatedBook = await Book.updateOne({_id: id}, data);

        res.json({status: 200, result: updatedBook})
    })

    app.delete('/api/books/delete/:id', async (req, res)=> {
        const id = req.params.id;

        const deletedBook = await Book.deleteOne({_id: id});

        res.json({status: 200, result: deletedBook})
    })

}