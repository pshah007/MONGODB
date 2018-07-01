const mongoose = require("mongoose");
const Schema = mongoose.Schema;



const BookSchema = new Schema({
	Title: String,
	Pages: Number
});



const AuthorSchema = new Schema({
	Name: String,
	Age: Number,
	Books:[BookSchema]
});

const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;

