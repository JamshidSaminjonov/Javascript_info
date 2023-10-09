//////////prototype ///////////////////
// let obj1 = {
//   name: "shox",
// };
// let ob2 = {
//   title: "master",
// };
// let obj4 = obj1;
// //////////////clone
// let obj3 = structuredClone(obj1);// yangi referance yaratib  object ichidagi malumontlarnoi kopy qiladi
// console.log(obj1 == obj3);
// console.log(obj1 == obj4);
// console.log(obj3);
// Object.assign(ob2, obj1);// 1- elementga ikknchisini qoshib beradi
// console.log(ob2);
//////////////////////////////////proto//////////////////////////
//2005 yildan boshlab suggest bulgan ishlatmaslikka
//2015 yolda toliq ishlatish mumkin
// obj1.__proto__ = ob2;
// console.log(obj1);
// console.log(obj1.title);
// obj1.__proto__ = null;
// console.log(obj1);
//protoning vazifasi : malumotlarnin  bir biriga set qilishda  yani assign da malumotlar qoshish mumkin uchirish mushkul ish protoda esa malumotlarni uchirish uchun proytoni  null qilish kifoya
/////////////////////////////prototype//////////////////
// goballar uchun ishlatiladi///////////
// let obj1 = {
//   name: "shox",
//   title: "academy",
// };
// let ob2 = {
//   name: "academy",
//   title: "master",
// };
// Object.prototype.fullName = function sayName() {
//   console.log(this.name, this.title);
//   //   console.log(sayName.name);
// };
// obj1.fullName();
// ob2.fullName();
///////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6, 7];
let arr4 = [1, 2, 3, 4, 5, 6, 7];
// function ty(t) {
//   let num = arr.indexOf(t);
//   let res = arr.splice(4, 1);
//   return arr;
// }
// console.log(ty(4));
Array.prototype.remove = function (n) {
  //   this.splice(n-1,1)
  let res = this.filter((value) => value !== n);
  console.log(this.splice(this.indexOf(n), 1));
  return this;
};
console.log(arr4.remove(1));
