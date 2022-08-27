let fs = require("fs/promises");

const readFour = async (file1, file2, file3, file4) => {
  let a1 = fs.readFile(file1, "utf-8");
  let a2 = fs.readFile(file2, "utf-8");
  let a3 = fs.readFile(file3, "utf-8");
  let a4 = fs.readFile(file4, "utf-8");
  let c1 = await a1;
  console.log(c1);
  let c2 = await a2;
  console.log(c2);
  let c3 = await a3;
  console.log(c3);
  let c4 = await a4;
  console.log(c4);
};

// let a = fs.readFile("dum.txt", "utf-8");
// a.then((data) => {
//   console.log(data);
// });
// console.log(a);
// console.log("This is End of File");

readFour("file1.txt", "file2.txt", "file3.txt", "file4.txt");
