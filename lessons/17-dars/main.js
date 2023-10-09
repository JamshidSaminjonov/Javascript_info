//////function haqida qisqacha

// function f(
//   sayHi = function () {
//     console.log(sayHi.name);
//   }
// ) {
//   //   console.log(f.name);
// }

// f();

let obj = {
  myName() {
    console.log("sayName");
  },
  sayLastname: function () {
    console.log("sayLastname");
  },
};
obj.myName();
obj.sayLastname();
setTimeout((i) => {
  if (i === 0) {
    return 0;
  }
  i--;
  return i;
}, 1000);
setTimeout(5);
