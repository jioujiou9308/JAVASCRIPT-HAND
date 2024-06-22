const fs = require('fs');
const path = require('path');


const filePath = path.resolve(__dirname, './resources/content.tx')

// 會讀取到當前工作目錄的路徑
// 回調函數的形式
// fs.readFile(filePath, 'utf8', (err, data) => {
//     console.log(data)
// })

// Promise的形式
let p = new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) reject(err);
        resolve(data)
    })
})
p.then(result => console.log(result)).catch(err => console.log(err));


// ~/Desktop/JAVASCRIPT-HAND/
//   ├── PromiseTutorial/
//   │   ├── 2-fs.js
//   │   └── file.txt
//   └── other-files-or-directories
// 當你在 ~/Desktop/JAVASCRIPT-HAND/PromiseTutorial 路徑下運行 node 2-fs.js 時，腳本中的相對路徑 ./file.txt 是相對於 PromiseTutorial 目錄的。
// 當你在 ~/Desktop/JAVASCRIPT-HAND 路徑下運行 node PromiseTutorial/2-fs.js 時，腳本中的相對路徑 ./file.txt 會被解釋為相對於 ~/Desktop/JAVASCRIPT-HAND 目錄的，而不是 PromiseTutorial 目錄。

// 這個問題可以使用__dirname 解決