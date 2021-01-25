function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

// Fun fact as of es6 javascript supports classes
// so the above can be like so

export class BookModel {

    constructor(title, pages, isbn) {
        this.title = title
        this.pages = pages
        this.isbn = isbn
    }
}

// This defines values on the object that is required to
// create the model
// as per OOP, we can actually define static methods as well within the class whether public or private
// I like this approach to JS cause it feels like you are writting server side code

const values = {
    title: "River and the source",
    pages: "200",
    isbn: "90893838UHX"
}

const newBook = new BookModel(...values)

var book = new Book('title', 'pages', 'isbn');

console.log(book.title);
book.title = 'new title';
console.log(book.title);
book.title = 'My life in Crime'
console.log(book.title);


Book.prototype.printTitle = function(){
    console.log(this.title);
    };
    book.printTitle();
