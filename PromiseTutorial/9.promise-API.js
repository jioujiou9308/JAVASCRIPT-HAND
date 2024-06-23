// 影片13

const p = new Promise((resolve, reject) => {
  resolve("resolve");
  //   * 特別注意:這個沒有被resolve包含的執是同步的值
  console.log("111");
});

p.then((data) => {
  console.log(data);
});

console.log("222");

// * 以上的結果順序是 111 => 222 => resolve
// 說明的是executor是同步執行的，意思就是立即執行內部的代碼，但是因為resolve是非同步的，所以會在最後執行



/*  
屬於promise API的三個方法為
1. promise 構造函數 : promise(executor)
2. promise.prototype.then(onFulfilled, onRejected) 
    處理成功或是失敗
3. promise.prototype.catch(onRejected)
    只處理失敗
*/