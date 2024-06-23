//  * 目標: 聲明一個Promise的構造函數
function Promise(executor) {
    this.PromiseState = "pending";
    this.PromiseResult = null;
    const self = this;
    this.callbacks = [];
  
    function resolve(data) {
      if (self.PromiseState !== "pending") return;
      self.PromiseState = "fulfilled";
      self.PromiseResult = data;
      self.callbacks.forEach((item) => {
        item.onResolve(data);
      });
    }
    function reject(data) {
      if (self.PromiseState !== "pending") return;
      self.PromiseState = "rejected";
      self.PromiseResult = data;
      self.callbacks.forEach((item) => {
        item.onReject(data);
      });
    }
  
    try {
      executor(resolve, reject);
    } catch (error) {
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
    if (this.PromiseState === "pending") {
      this.callbacks.push({
        onResolve: onResolve,
        onReject: onReject,
      });
    }
  };
  
