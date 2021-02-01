const express = require('express');
const bookRouter = express.Router();
const expressAsyncHandler = require('express-async-handler');
const Book = require('../models/Book');


//Create Book
bookRouter.post('/',expressAsyncHandler(async(req,res)=>{
    const book = await Book.create(req.body);
    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('Book creating failed');
    }
}));

//finding book
bookRouter.get('/',expressAsyncHandler(async(req,res)=>{
    const book = await Book.find({});
    if(book){
        res.status(200);
        res.json(book);
    }else{
        res.status(500);
        throw new Error('Books not found');
    }
}));


module.exports = bookRouter;