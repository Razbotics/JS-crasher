let getSummary = function (month, revised) {
  console.log(
    `${this.title} was written ${this.author} in ${this.year} and month ${month}, is revised: ${revised}`
  );
};

let book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2015",
};

let book2 = {
  title: "Book Two",
  author: "Jane Doe",
  year: "2014",
};

// call method
console.log("call method");
getSummary.call(book1, "Jan", true);
getSummary.call(book2, "Feb", false);

// apply method
console.log("apply method");
getSummary.apply(book1, ["Jan", true]);
getSummary.apply(book2, ["Feb", false]);

// bind method
console.log("bind method");
const summarize1 = getSummary.bind(book1, "Jan", true);
const summarize2 = getSummary.bind(book2, "Feb", false);
summarize1();
summarize2();
