// /////////////////////DOM-3///////////////
// import { user } from "./data.js";
// ///----------mouse evant
// //1 onclick
// // function clicked(e) {
// //   console.log(e);
// // }
// // btn.onclick = function () {
// //   add.append("salom");
// // };
// // add.append(user);
// // //2 onmouce.../up ,down,move
// // function move(e) {
// //   //   console.log("x:" + e.x, "y:", e.y);
// //   console.log(e);
// // }let div = do
// let data = user;
// const ondelete = (e) => {
//   let res = data.filter((v) => {
//     // console.log(v.id);
//     return v.id !== e;
//   });
//   data = res;
//   console.log(res);
//   redraw();
// };
// const redraw = () => {
//   if (data.length == 0) {
//     add.innerHTML = "No data";
//   } else {
//     add.innerHTML = null;
//     data.forEach((v) => {
//       let div = document.createElement("div");
//       let btn = document.createElement("button");
//       btn.innerHTML = "Delete";
//       btn.addEventListener("click", () => ondelete(v.id));
//       div.innerHTML += `${v.id}-${v.name}`;
//       add.append(div);
//       div.append(btn);
//       // add.append('<button>click me</button>);
//     });
//   }
// };
// redraw();
