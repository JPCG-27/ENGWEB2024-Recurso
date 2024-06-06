var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
        bookId: String,
        title: String,
        series: String,
        author: [String],
        rating: Number,
        description: String,
        language: String,
        isbn: String,
        genres: [String],
        characters: [String],
        bookFormat: String,
        edition: String,
        pages: Number,
        publisher: String,
        publishDate: String,
        firstPublishDate: String,
        awards: [String],
        numRatings: Number,
        ratingsByStars: [Number],
        likedPercent: Number,
        setting: [String],
        coverImg: String,
        bbeScore: Number,
        bbeVotes: Number,
        price: Number
}, { collection: 'livros' }, { versionKey: false })


module.exports = mongoose.model('book', bookSchema);
