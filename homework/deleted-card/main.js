import { data } from "./data.js";
console.log(data);
// let text = `
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
// rerum magni tempora nihil cumque totam odit ea? Id sint tempora cum
// culpa quibusdam vitae, aperiam laborum voluptatum, neque sunt
// veritatis.
// `;
let user = data;
let container = document.querySelector(".container");

for (let i = 0; i < data.length; i++) {}

function draw() {
  container.innerHTML = null;
  user.forEach((value) => {
    let card = document.createElement("div");
    let i = document.createElement("i");
    i.setAttribute("class", "fa-solid fa-trash trash1");
    i.setAttribute("style", "color: #f41027");
    let res = null;
    i.addEventListener("click", () => {
      res = user.filter((e) => {
        if (e.id !== value.id) {
          // console.log(e);
          return e;
        }
      });
      // console.log(res);
      user = res;
      draw();
      // console.log(user);
      return res;
    });
    card.setAttribute("class", "card");
    card.innerHTML = `<p>${value.id}-${value.text}</p>`;
    card.append(i);
    container.append(card);
  });
}
draw();

// let trashs = document.querySelectorAll(".trash");
// trashs.addEventListener("click", (e) => {
//   console.log(e);
// });

// function deleting(e) {
//   console.log(delete card);
// }
