// ////////////////////advanced function///////////////
// ////////////////bind///

// // function called() {
// //   console.log("hi", this);
// // }
// // let obj1 = {
// //   name: "web",
// //   age: 24,
// //   massage: call,
// // };
// let obj2 = {
//   name: "web",
//   age: 24,
// };
// // called.bind(obj2)();
// ///////////////////////////////call/////////////
// function called(name, age) {
//   console.log("hi", this, name, age);
// }
// called.call(obj2, obj2.name, obj2.age);
// //////////////////////////////////apply////////////
// called.apply(obj2, [obj2.name, obj2.age]);

// console.log(
//   setTimeout(() => {
//     console.log("salom");
//   }, 1000)
// );
// console.log(setTimeout);

// setTimeout(() => {
//   console.log("salom");
// }, 0);
setInterval(() => {
  callHello();
  //   clearInterval();
}, 2000);
console.log("salom");
function callHello() {
  console.log("salom");
}
const { assert } = require("chai");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(duplicateCount(""), 0);
    assert.strictEqual(duplicateCount("abcde"), 0);
    assert.strictEqual(duplicateCount("aabbcde"), 2);
    assert.strictEqual(duplicateCount("aabBcde"), 2, "should ignore case");
    assert.strictEqual(duplicateCount("Indivisibility"), 1);
    assert.strictEqual(
      duplicateCount("Indivisibilities"),
      2,
      "characters may not be adjacent"
    );
  });
});
