// let res = {};

// let obj = [
//   { name: "shod", id: 1, title: "OBS" },
//   { name: "shod", id: 2, title: "OBB" },
//   { name: "shod", id: 6, title: "OBS" },
//   { name: "shod", num: 1, title: "OBB" },
// ];
// for (let item of obj) {
//   //   console.log(item);
//   if (item.title == "OBB") {
//     res[`${item.title.toLowerCase()}`] = [item];
//     // console.log(res);
//   }
//   if (item.title == "OBS") {
//     res[`${item.title.toLowerCase()}`] = [{ ...item }];
//     // console.log(res);
//   }
// }
// console.log(res);

//************Arrray advanced */
// let arr = [1, 2, 4, 5];
// console.log(eval(arr.join("+")));
// let str = ["salom", "a", "key", "ss", "45"];
// let result = str.sort((text1, text2) => text1.localeCompare(text2));
// console.log(result);
// filter arrayda

let arr = ["salom", "alk", 45, true, 0, [], {}, null, undefined, ""];
let num = [1, 23, 34, 35, 2, 34];
let obj = [
  { name: "shod", id: 1, title: "OBS" },
  { name: "yhod", id: 2, title: "OBB" },
  { name: "ohod", id: 6, title: "OBS" },
  { name: "hod", id: 1, title: "OBB" },
];
// console.log(obj.filter((value, index) => value.id == 2).name); //bu holatda false holat qaytarilmaydi//demak filtir object ichida filtratsiya qiladi va objectning elementlarini massiv ichida  qaytaradi
// console.log(obj.filter((value, index) => value.id == 2).name); //findning vazifasi esa elementni topib ushani uzini gina qaytarish  farq : filtr = >massiv ,find= >element qayatardi
// console.log(
//   obj.sort((a, b) => {
//     // return a.id - b.id; //idini usish tartibida chiqarish
//     return a.name.localeCompare(b.name); //harflarni acci code tartibida chiqarish
//   })
// );

console.log(obj.findIndex((value) => value.id == 6));
