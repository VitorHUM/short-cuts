const btnPlay = document.querySelector("#btn-play");
const btnAbout = document.querySelector("#btn-about");
const menu = document.querySelector(".menu-container");
const about = document.querySelector(".about-container");
const btnBack = document.querySelector("#btn-back");
const game = document.querySelector(".game-container");
const select = document.querySelector(".select-container");
const inputName = document.querySelector("#name");
const btnDifficult = document.querySelectorAll(".btn-difficult");
const seconds = document.querySelector("#seconds");

btnPlay.addEventListener("click", () => {
  menu.style.display = "none";
  select.style.display = "flex";
  inputName.focus();

  btnDifficult.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (inputName.value === "") {
        alert("COLOCA NOME AI");
        return;
      }
      select.style.display = "none";
      game.style.display = "flex";
      let count = 10;
      let time = setInterval(() => {
        count--;
        seconds.innerText = `${+seconds.innerText - 1}`;
        if (count === 0) {
          clearInterval(time);
          console.log("acabou o tempo");
        }
      }, 1000);
    });
  });
});

btnAbout.addEventListener("click", () => {
  menu.style.display = "none";
  about.style.display = "flex";
  btnBack.addEventListener("click", () => {
    menu.style.display = "flex";
    about.style.display = "none";
  });
});
