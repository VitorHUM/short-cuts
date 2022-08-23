// CONTAINERS
const menu = document.querySelector(".menu-container");
const game = document.querySelector(".game-container");
const select = document.querySelector(".select-container");
const about = document.querySelector(".about-container");
const end = document.querySelector(".end-container");

// BUTTONS
const btnPlay = document.querySelector("#btn-play");
const btnDifficult = document.querySelectorAll(".btn-difficult");
const btnAlternative = document.querySelectorAll(".btn-alternative");
const btnAbout = document.querySelector("#btn-about");
const btnBack = document.querySelector("#btn-back");
const btnHome = document.querySelector("#home");

// INPUTS & ASSETS
const inputName = document.querySelector("#input-name");
const difficult = document.querySelector(".btn-difficult").innerText;
const time = document.querySelector("#time");
const question = document.querySelector(".question");
const alternativeA = document.querySelector("#altA");
const alternativeB = document.querySelector("#altB");
const alternativeC = document.querySelector("#altC");
const alternativeD = document.querySelector("#altD");

btnPlay.addEventListener("click", () => {
  menu.style.display = "none";
  select.style.display = "flex";
  inputName.focus();

  btnDifficult.forEach((diffs) => {
    diffs.addEventListener("click", () => {
      if (inputName.value === "") {
        alert(`FALTOU O NOME\n\nDIFICULDADE: ${difficult}`);
        return;
      }

      select.style.display = "none";
      game.style.display = "flex";

      let count = 10;
      let clock = setInterval(() => {
        count--;
        time.innerText = `0${+time.innerText - 1}`;
        if (count === 0) {
          setTimeout(() => {
            clearInterval(clock);
            alert("ACABOU O TEMPO");
          }, 100);
        }
      }, 1000);

      btnAlternative.forEach((alts) => {
        alts.addEventListener("click", () => {
          game.style.display = "none";
          end.style.display = "flex";

          btnHome.addEventListener("click", () => {
            end.style.display = "none";
            menu.style.display = "flex";
          });
        });
      });
    });
  });
});

btnAbout.addEventListener("click", () => {
  menu.style.display = "none";
  about.style.display = "flex";
  btnBack.addEventListener("click", () => {
    about.style.display = "none";
    menu.style.display = "flex";
  });
});
