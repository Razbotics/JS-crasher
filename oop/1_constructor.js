function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written ${this.author} in ${this.year}`;
  };
}

const book1 = new Book("Book one", "John Doe", "2013");
const book2 = new Book("Book two", "Jane Doe", "2014");

console.log(book1.getSummary());
console.log(book2);
