class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  static getTopBook() {
    console.log("Barnes & Noble");
  }
}

// Instantiate Object
const book1 = new Book("Book one", "John Doe", "2014");
console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());
Book.getTopBook();
