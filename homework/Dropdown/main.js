/////////dropdown 1-way/////////////

// let drops = document.querySelector(".drops");
// let triangle = document.querySelector("i");

// const drop = () => {
//   drops.classList.toggle("active");
//   triangle.classList.toggle("rotate");
// };
// console.log();

///////////////////2-way//////////
let dropsdown = document.querySelector(".dropdown");
let drops = document.querySelector(".drops");
let triangle = document.querySelector("i");

dropsdown.addEventListener("click", () => {
  drops.classList.toggle("active");
  triangle.classList.toggle("rotate");
});
