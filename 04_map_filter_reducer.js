// java script map

let a = [1, 2, 3, 4];

let a2 = a.map((value) => {
  return value + 6;
});
// console.log(a, a2);

// JavaScript fltar

let c1 = a.filter((value) => {
  // with the help of filter we can get our values using any type of filter
  return value > 2;
});
// console.log(c1);

// Java Script reducer

let b1 = a.reduce((val1, val2) => {
  return val1 + val2;
});
console.log(b1);
