function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

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
