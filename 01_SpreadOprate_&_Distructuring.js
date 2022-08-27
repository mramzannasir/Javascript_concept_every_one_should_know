// (1.) Spread Oprater and disturecturin

arr = [1, 2, 3, 4, 5, 6];
function avg(a, b, c) {
  return a + b + c;
}

// let a = avg(...arr); //this will take arry and apply function
// let a = [8, 7, ...arr] // this will display this 8,7 numbers and array
// let a = [...arr]; // this will copy the array
// let a2 = [10,11, 12]
// let a = [...arr, ...a2 ] // this will conacte these array

let obj1 = {
  name1: "nasir",
  grade: "2sl",
  lang: "Java Script",
};

// let obj2 = {} old way to update an array
// obj2.name1 = obj1.name1,
// obj2.grade = obj1.grade,
// obj2.lang = "Python";

//Now we use spread oprater and do this
//let obj2 = {...obj1, lang:"R"} // This is very easy way to update are take and update any value
// How to get values frm an object   // th
// let {name1, grade, lang}= obj1
// console.log(name1); // you can also get any single value from any object -----This Called distructuring------

console.log("baby");
