//////////////////atribute manipulation//////
let input = document.querySelector("input");
// console.log(input.getAttribute("type"));
// input.setAttribute("type", "password");
const changeBorder = () => {
  if (i.getAttribute("class") === "fa-solid fa-eye") {
    i.setAttribute("class", "fa-solid fa-eye-slash");
    input.setAttribute("type", "password");
  } else {
    i.setAttribute("class", "fa-solid fa-eye");
    input.setAttribute("type", "text");
  }
};
//get, set , has , removeAttribute
// i.getAttribute("id");
// input.setAttribute("id", "iName");
// console.log(input.hasAttribute("id"));
// console.log(input.removeAttribute("placeholder"));

////////////////////////////////////create element in js////////
let button = document.createElement("button");
let idI = document.getElementById("input");
let loginBorder = document.querySelector(".loginBorder");
console.log(idI);
button.innerHTML = "click me";
idI.append(button);

//////////////////////////////style in js////////////
button.style.cssText =
  "border:1px solid rgb(19, 147, 233); padding:8px 14px; margin-top:10px; cursor:pointer;";
button.style.backgroundColor = "#fff";
button.style.color = "rgb(19, 147, 233)";
button.setAttribute("class", "btn");

button.addEventListener("click", () => {
  loginBorder.classList.toggle("loginHover");
  //   changeButton();
  button.classList.toggle("buttonHover");
  //   input.removeAttribute('placeholder')
});
// function changeButton() {}

////////////////////////class list haqida//////////////
//add remove contains toggle

//////////////////////clone in js///////////
const cloneButton = button.cloneNode("true");
// console.log(cloneButton, "clone");
// console.log(button, "origin");

////////////////window in js///////////////
// offsetwidth; opshi
// offsetheight;
// clientheight; only border and scroll inside
// clientwidth;
const hw = document.querySelector(".scroll");
// console.log(hw.offsetHeight);
// console.log(hw.clientHeight);
// console.log(hw.scrollHeight);
// console.log(hw.scrollWidth);
// console.log(hw.clientWidth);
// console.log(hw.offsetWidth);
// hw.scrollBy(0, 50);
// hw.scrollTo(0, 0);
/////////////////////////////btn////
const btn = document.getElementById("btn");
/////////////////click///////
function clicked(e) {
  console.log(e);
}

btn.onclick = () => clicked("text");
btn.addEventListener("click", () => {
  console.log("salon");
});
////////////////contextMenyu
// btn.addEventListener("contextmenu", () => {
//   console.log("chap tomoni");
// });
// ////////////////dblclick
// btn.addEventListener("dblclick", () => {
//   console.log("ikkimarta");
// });
// ///////////////////////mouseover
// hw.addEventListener("mouseover", () => {
//   console.log();
// });
//////////////////////mouseout
// hw.addEventListener("mouseout", () => {
//   console.log("mouseout");
// });
// //////////////////////mousedown
// hw.addEventListener("mousedown", () => {
//   console.log("mousedown");
// });
// //////////////////////mouseup
// hw.addEventListener("mouseup", () => {
//   console.log("mouseoup");
// });
