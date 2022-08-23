const quiz = new Quiz();

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
const time = document.querySelector("#time");
const question = document.querySelector(".question");

btnPlay.addEventListener("click", () => {
  menu.style.display = "none";
  select.style.display = "flex";
  inputName.focus();

  btnDifficult.forEach((diffs) => {
    diffs.addEventListener("click", () => {
      if (inputName.value === "") {
        alert(`FALTOU O NOME`);
        return;
      }

      select.style.display = "none";
      game.style.display = "flex";

      // let count = 10;
      // let clock = setInterval(() => {
      //   count--;
      //   time.innerText = `0${count}`;
      //   if (count === 0) {
      //     setTimeout(() => {
      //       clearInterval(clock);
      //       alert("ACABOU O TEMPO");
      //     }, 100);
      //   }
      // }, 1000);

      // btnAlternative.forEach((alts) => {
      //   alts.addEventListener("click", () => {
      //     game.style.display = "none";
      //     end.style.display = "flex";

      //     btnHome.addEventListener("click", () => {
      //       end.style.display = "none";
      //       menu.style.display = "flex";
      //     });
      //   });
      // });

      setupGame(inputName.value, diffs.innerText);
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

function setupGame(name, difficult) {
  quiz.settingUpGame(name, difficult);
  question.innerText = quiz.roundQuestion.question;
  quiz.roundQuestion.alternatives.sort(() => Math.random() - 0.5);
  btnAlternative.forEach((alternative, index) => {
    alternative.innerText = quiz.roundQuestion.alternatives[index];
    if (quiz.roundQuestion.alternatives[index] === quiz.roundQuestion.answer) {
      alternative.id = "correct";
    } else {
      alternative.id = "wrong";
    }
    alternative.addEventListener("click", () => {
      quiz.checkAnswer(alternative);
    });
  });
}
