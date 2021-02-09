document.getElementById(
  "search"
).innerHTML = `<p>No debounce: </p><input id="search" type="text" onkeyup="getData(event)"/>`;
document.getElementById(
  "search2"
).innerHTML = `<p>With debounce: </p><input id="search" type="text" onkeyup="debouncedGetData(event)"/>`;

function getData(e) {
  console.log(e.target.value);
}

let debounce = (fn, delay) => {
  let timer;
  return function (...args) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const debouncedGetData = debounce(getData, 300);
