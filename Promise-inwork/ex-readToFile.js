const fs = require("fs");
const path = require("path");

const pathUrl1 = path.resolve(__dirname, "./sources/content-1.txt");
const pathUrl2 = path.resolve(__dirname, "./sources/content-2.txt");

// method 1 use callback function
// fs.readFile(pathUrl1, "utf-8", (err, data1) => {
//   console.log(data1);
//   fs.readFile(pathUrl2, "utf-8", (err, data2) => {
//     console.log(data2);
//   });
// });

// method 2 use promise

function readToFile(pathUrl) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathUrl, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

readToFile(pathUrl1)
  .then((data1) => {
    console.log(data1);
    return readToFile(pathUrl2);
  })
  .then((data2) => {
    console.log(data2);
  })
  .catch((err) => {
    console.log(err);
  });
