///////////////////////1-usul
// let btns = document.querySelector(".numbers");
// for (let i = 1; i <= 100; i++) {
//   let btn = document.createElement("button");
//   btn.innerHTML = i;
//   btns.append(btn);
//   btn.addEventListener("click", () => {
//     btns.innerHTML = "";
//     for (let j = 1; j <= 100; j++) {
//       let count = document.createElement("button");
//       if (j !== "*") {
//         if (j % btn.innerText == 0) {
//           count.innerHTML = "*";
//         } else {
//           count.innerHTML = j;
//         }
//         btns.append(count);
//       }
//     }
//   });
// }
///////////////////////////////2-usul
let btns = document.querySelector(".numbers");
function display() {
  for (let i = 1; i <= 100; i++) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    btns.append(btn);
  }
}
display();
let btnArr = document.querySelectorAll("button");
for (let i = 0; i <= 100; i++) {
  if (btnArr[i]) {
    //demak nullni oldini olish uchun uni ifga uraymiz
    btnArr[i].addEventListener("click", (e) => {
      let count = e.target.innerHTML;
      for (let k of btnArr) {
        if (k.innerHTML % count == 0) {
          k.innerHTML = "*";
        }
      }
    });
  }
}
