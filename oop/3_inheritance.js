function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// define in prototype
Book.prototype.getSummary = function () {
  return `${this.title} was written ${this.author} in ${this.year}`;
};

// Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

//Inherit Prototype
// Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype = Book.prototype;

//Set constructor
Magazine.prototype.constructor = Magazine;

const mag1 = new Magazine("Mag One", "John Doe", "2015", "Jan");
console.log(mag1);
console.log(mag1.getSummary());
