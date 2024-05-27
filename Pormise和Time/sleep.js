// console.log('Hello')
// await sleep(3000)
// console.log('world')



// function sleep(duration) {
//     return new Promise((resolve) => setTimeout(resolve, duration));
// }


// let delay = function (s) {
//     return new Promise(function (resolve, reject) {
//         console.log('resolve', resolve)
//         setTimeout(resolve, s);
//     });
// };

// delay().then(function () {
//     console.log(1);     // 顯示 1
//     return delay(1000); // 延遲ㄧ秒
// }).then(function () {
//     console.log(2);     // 顯示 2
//     return delay(1000); // 延遲一秒
// }).then(function () {
//     console.log(3);     // 顯示 3
// });

setTimeout(() => {
    console.log('test')
    test()
}, 2000)

function test() {
    console.log('innerfunction')
}
console.log("Hello");

sleep(1000).then(() => {
  console.log("world");
});

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration);
  });
}
