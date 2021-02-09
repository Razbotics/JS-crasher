let getSummary = function (month) {
  return `${this.title} was written ${this.author} in ${this.year}, in month ${month}`;
};

let book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2015",
};

const summarize = getSummary.bind(book1, "Jan");
console.log(summarize());

Function.prototype.myBind = function (...args1) {
  let fn = this;
  return function (...args2) {
    let args = args1.slice(1);
    return fn.apply(args1[0], [...args, ...args2]);
  };
};

const summarize2 = getSummary.myBind(book1, "Jan");
console.log(summarize2());
