const fs = require("fs");
const path = require("path");

// 使用__dirname使得這個要讀取的檔案永遠是相對於執行fs.js的位置
const pathUrl = path.resolve(__dirname, "./sources/content.txt");

const data = fs.readFile(pathUrl, "utf-8", (err, data) => {
  console.log(data);
});

// 結論
// 使用 __dirname 可以確保檔案路徑始終是相對於腳本檔案的位置，而不是相對於當前工作目錄。這種方法更可靠，尤其是在你不確定腳本將從哪個目錄運行的情況下。因此，使用 __dirname 是確保路徑正確的最佳實踐。
