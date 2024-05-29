// let map = new Map();
// map.set("name", "John");
// map.set("first", 1);
// map.set({ sayHi: "Hi" }, "obj");
// const handle = (test) => {
//   console.log("test", test);
//   console.log("handle");
// };
// map.set(handle, "function");
// map.set([1, 2, 3], "array");

// console.log(map);
// let map2 = new Map([
//     ['first', 1],
//     [10, 'ten'],
//     [{sayHi: 'Hi'}, 'obj']
// ]);

// console.log(map2);

let map1 = new Map();
map1.set("name", "John");
map1.set("first", 1);


for (let key of map1) {
  console.log("key", key);
}

console.log("map1", [...map1]);
console.log('map1',map1)
let map2 = new Map([
  ["name", "John"],
  ["first", 1],
]);

for(let [key,value] of map2){
    console.log("key",key);
    console.log("value",value);
}