//  * 目標: 聲明一個Promise的構造函數
function Promise(executor) {
  // 1. 我們要先添加屬姓，當我們log出promise對象的時候可以知道有兩個屬性
  //  - 一個是promiseState，用來表示當前promise的狀態
  //  - 一個是promiseResult，用來表示當前promise的結果
  this.PromiseState = "pending";
  this.PromiseResult = null;
  //   儲存this的值，如果不儲存在下面的function中使用this的話，this會指向window
  const self = this;
  //   * 目的是處理 setTimeout的狀況
  this.callback = {};
  // resolve 函數
  function resolve(data) {
    // promise只能被修改一次的規則
    if (self.PromiseState !== "pending") return;
    // 修改對象狀態
    self.PromiseState = "fulfilled";
    // !處理setTimeout的情況
    self.PromiseResult = data;
    if (self.callback.onResolve) {
      self.callback.onResolve(data);
    }
  }
  // reject 函數
  function reject(data) {
    // promise只能被修改一次的規則
    if (self.PromiseState !== "pending") return;
    // 修改對象狀態
    self.PromiseState = "rejected";
    // 修改對象結果
    self.PromiseResult = data;
    // !處理setTimeout的情況
    if (self.callback.onReject) {
      self.callback.onReject(data);
    }
  }

  //   同步調用，執行氣函數
  try {
    executor(resolve, reject);
  } catch (error) {
    // 修改promise狀態為失敗
    reject(error);
  }
}
//  * 目標: 添加then方法
Promise.prototype.then = function (onResolve, onReject) {
  if (this.PromiseState === "fulfilled") {
    onResolve(this.PromiseResult);
  }

  if (this.PromiseState === "rejected") {
    onReject(this.PromiseResult);
  }

  //   !處理setTimeout的情況
  if (this.PromiseState === "pending") {
    this.callback = {
      onResolve: onResolve,
      onReject: onReject,
    };
  }
};

/*
問題1:
為什麼原本的new Promise方法，在引入js文件後，檔案中的function Promise會覆蓋掉原本的Promise方法？
*/
