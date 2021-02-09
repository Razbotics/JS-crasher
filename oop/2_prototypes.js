function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// define in prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written ${this.author} in ${this.year}`;
};

Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

const book1 = new Book("Book one", "John Doe", "2013");
const book2 = new Book("Book two", "Jane Doe", "2014");

console.log(book1.getSummary());
console.log(book1.getAge());
book2.revise("2018");
console.log(book2);
