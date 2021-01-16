// function Book(title, pages, isbn){ //{1}
// this.title = title;
// this.pages = pages;
// this.isbn = isbn;
// }
// Book.prototype.printTitle = function(){
// console.log(this.title);
// };


class Book { //{2}
constructor (title, pages, isbn) {
this.title = title;
this.pages = pages;
this.isbn = isbn;
}
printIsbn(){
console.log(this.isbn);
}
}

let book = new Book('The Power of positive Thinking', 234, 'isbn');
console.log(book.title);
console.log(book.pages);

book.title = 'Golden Bells';
console.log(book.title);

console.log("-----------------------------------------------");
//inheritance

class ITBook extends Book { //{1}
constructor (title, pages, isbn, technology) {
super(title, pages, isbn); //{2}
this.technology = technology;
}
printTechnology(){
console.log(this.technology);
}
}
let jsBook = new ITBook('Learning JS Algorithms', '200', '1234567890',
'JavaScript');
console.log(jsBook.title);
console.log(jsBook.pages);
console.log(jsBook.isbn);
//console.log(jsBook.printTechnology());
console.log(jsBook.technology);