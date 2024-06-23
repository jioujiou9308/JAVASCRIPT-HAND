// 影片8
const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

const pathUrl1 = "./sources/content-1.txt";

readFile(pathUrl1, "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
// 使用util.promisify()將fs.readFile()方法轉換為promise
// 這樣就可以使用.then()和.catch()來處理異步操作
// 不需要另外將fs.readFile()方法包裝在promise中