let btns = document.querySelector(".numbers");
for (let i = 1; i <= 100; i++) {
  let btn = document.createElement("button");
  btn.innerHTML = i;
  btns.append(btn);
  btn.addEventListener("click", () => {
    btns.innerHTML = "";
    for (let j = 1; j <= 100; j++) {
      let count = document.createElement("button");
      if (j !== "*") {
        if (j % btn.innerText == 0) {
          count.innerHTML = "*";
        } else {
          count.innerHTML = j;
        }
        btns.append(count);
      }
    }
  });
}
