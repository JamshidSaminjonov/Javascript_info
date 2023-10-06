//////////////////////////////////////////////////////////getOwnpropertyDescripter/////
// let obj = {
//   name: "man",
//   title: "san",
// };
/////////////object.getOwnpropertyDescripter(user)///////////////
// console.log(Object.getOwnPropertyDescriptor(obj, "name"));
//3xil xuxsiyati bor
//1 writable - not change//2 enumerable- not loop//3.cufigurable- not delate
/////////////////Object.defineProperty/////////////
// Object.defineProperty(obj, "name", { writable: false });
// console.log(obj);
// obj.name = "kalla";
// console.log(obj);
let obj = {
  name: "man",
  title: "san",
};
Object.defineProperty(obj, "name", { enumerable: false });
for (let i of obj) {
  console.log(obj[i]);
}
