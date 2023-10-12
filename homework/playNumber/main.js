let btns = document.querySelector(".numbers");
console.log(btns);

for (let i = 1; i <= 100; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = i;
  btns.append(btn);
  btn.addEventListener("click", () => {
    btns.innerHTML = "";
    for (let j = 1; j <= 100; j++) {
      let count = document.createElement("button");
      //   console.log(count);
      if (j !== "*") {
        if (j % btn.innerText == 0) {
          count.innerHTML = "*";
          console.log(count);
        } else {
          count.innerHTML = j;
        }
        btns.append(count);
      }
    }
  });
}
