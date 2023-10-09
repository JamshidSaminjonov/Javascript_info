// let parent = document.querySelector(".parent");
// // console.log(parent.hasAttribute("class"));
// // console.log(parent.hasAttribute("type"));
// // console.log(parent.getAttribute("class"));
// // console.log(parent.removeAttribute("id"));

// let div = document.createElement("div");
// let text = document.createTextNode("hey dom");
// console.log(div.setAttribute("id", "border"));
// div = parent.cloneNode(true);//clone qilish
// parent.after(div);
// parent.before(div);
// // parent.append(div);
// // parent.prepend(div);
// // div.append(text);
// // div.remove();//uchirish
// // console.log(div);
// ////////////////////css haqida//////////////
// parent.style.fontSize = "25px";
// parent.style.cssText = `
// fontFamily:serif;
// border:none;
// text:center;
// background:red;
// `;

// scrollHeight/// umumiy uxunlik skrollarni ham hiosoblab
// clientheight  esa joriy heightini kursatadi
// let btn = document.querySelector("button");
// function scr() {
//   //   parent.scrollBy(0, parent.scrollHeight);//  oxiriga tushiradi
//   //   parent.scrollBy(0, 10);// 10 px tushiradi pasga
//   //   parent.scrollBy(0, -10);// 10 px tushiradi tepaga
//   //   parent.scrollTo(0, 50);// 50 px tushiradi pasga tushirib tuxtatadi
//   //   console.log("salom");
//   if (parent.clientHeight == parent.scrollHeight) {
//     parent.style.height = "150px";
//     btn.innerHTML = "Show more";
//   } else {
//     parent.style.height = `${parent.scrollHeight}px`;
//     btn.innerHTML = "Show less";
//   }
// }
// function del() {
//   parent.hidden = true;
// }
///////////////////////qattiq vazifa////////////////
let mj = document.createElement("li");
// mj.innerHTML = "salom";
let change = document.querySelectorAll(".multiChangeItems");
console.log(change);
for (i = 1; i <= 100; i++) {
  mj[i] = i;
  console.log(mj[i]);
    change.prepend() += change.prepend(mj) ;
}
