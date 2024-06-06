const mongoose = require('mongoose');
var Book = require('../models/book');

module.exports.list = () => {
    return Book.find().exec();
}

module.exports.findById = (id) => {
    return Book.findOne({ bookId: id }).exec();
}

module.exports.getBooksByChar = (char) => {
    var regexPattern = new RegExp(char, "i");
    return  Book.distinct("characters", { characters: { $regex: regexPattern } }).exec();
}

module.exports.getBooksByGenre = (tipo) => {
    return Book.find({ genres: tipo }).exec();
}

module.exports.listGenres = () => {
    return Book.distinct("genres").sort().exec();
}

module.exports.listCharacters = () => {
    return Book.distinct("characters").sort().exec();
}

module.exports.insert = (Book) => {
    if (Book.find({ bookId: Book.bookId }).exec().length != 1) {
        var newBook = new Book(Book);
        return newBook.save();
    }
    
    return Promise.reject(new Error('Book já existe'));
}

module.exports.remove = (id) => {
    return Book.find({ bookId: id }).deleteOne().exec();
}

module.exports.updateBookByBookId = (bookId, updatedBookData) => {
    return Book.findOneAndUpdate({ bookId: bookId }, updatedBookData, { new: true })
        .then(updatedBook => {
            if (!updatedBook) {
                throw new Error('Book not found');
            }
            return updatedBook;
        });
}
