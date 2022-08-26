const quiz = new Quiz();

// CONTAINERS
const menu = document.querySelector(".menu-container");
const game = document.querySelector(".game-container");
const select = document.querySelector(".select-container");
const about = document.querySelector(".about-container");
const end = document.querySelector(".end-container");
const score = document.querySelector(".score-container");

// BUTTONS
const btnPlay = document.querySelector("#btn-play");
const btnDifficult = document.querySelectorAll(".btn-difficult");
const btnAlternative = document.querySelectorAll(".btn-alternative");
const btnAbout = document.querySelector("#btn-about");
const btnBack = document.querySelector("#btn-back");
const btnHome = document.querySelector("#home");

// INPUTS & ASSETS
const inputName = document.querySelector("#input-name");
const modal = document.querySelector("#myModal");
const modalClose = document.querySelector(".close-modal");
const time = document.querySelector("#time");
const question = document.querySelector(".question-display");
const endName = document.querySelector(".end-name");
const endCorrect = document.querySelector(".end-correct");
const endWrong = document.querySelector(".end-wrong");

btnPlay.addEventListener("click", () => {
  menu.style.display = "none";
  select.style.display = "flex";
  inputName.focus();

  btnDifficult.forEach((diffs) => {
    diffs.addEventListener("click", () => {
      if (inputName.value === "") {
        modal.style.display = "block";
        modalClose.addEventListener("click", () => {
          modal.style.display = "none";
        });
        return;
      }

      select.style.display = "none";
      game.style.display = "flex";

      setupGame(inputName.value, diffs.value);
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
  printQuestion();
}

btnAlternative.forEach((alternative) => {
  alternative.addEventListener("click", () => {
    clearInterval(quiz.intervalId);

    quiz.checkAnswer(alternative);

    if (quiz.checkStatus() === "dead") {
      setTimeout(() => {
        settingUpEnd();
      }, 2000);
    } else {
      setTimeout(() => {
        printQuestion();
      }, 2000);
    }
  });
});

function settingUpEnd() {
  game.style.display = "none";
  end.style.display = "flex";
  quiz.setResult();

  if (quiz.result === "good" && quiz.difficult === "easy") {
    endName.innerText = `${quiz.name}`;
    endCorrect.innerText = `${quiz.correct}`;
    endWrong.innerText = `${quiz.wrong}`;
    const endMsg = document.querySelector(`.${quiz.difficult}-${quiz.result}`);
    endMsg.style.display = "flex";

    score.style.alignItems = "flex-end";
    score.style.padding = "0px 0px";
    score.style.backgroundColor = "#FFFFFF";
    score.style.borderRadius = "0px";
    score.style.boxShadow = "0px 0px 0px #000000";
    score.style.fontWeight = "300";
    score.style.letterSpacing = "2px";
  } else {
    endName.innerText = `${quiz.name}`;
    endCorrect.innerText = `${quiz.correct}`;
    endWrong.innerText = `${quiz.wrong}`;
    const endMsg = document.querySelector(`.${quiz.difficult}-${quiz.result}`);
    endMsg.style.display = "flex";
  }
}

btnHome.addEventListener("click", () => {
  document.location.reload(true);
});

function printQuestion() {
  question.innerText = quiz.roundQuestion.question;
  quiz.roundQuestion.alternatives.sort(() => Math.random() - 0.5);
  btnAlternative.forEach((alternative, index) => {
    alternative.style.backgroundColor = "#d2d2d2";
    alternative.innerText = quiz.roundQuestion.alternatives[index];
    if (quiz.roundQuestion.alternatives[index] === quiz.roundQuestion.answer) {
      alternative.id = "correct";
    } else {
      alternative.id = "wrong";
    }
  });
  quiz.startTimer();
}
