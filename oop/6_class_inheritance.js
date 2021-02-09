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

// Magazine subclass

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }

  getMonth() {
    return this.month;
  }
}

const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");
console.log(mag1);
console.log(mag1.getSummary());
console.log(mag1.getMonth());
