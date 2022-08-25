const lifesImg = document.querySelector(".life");
const endPic = document.querySelector(".end-picture");
const timeDisplay = document.querySelector("#time");

class Quiz {
  constructor() {
    this.name = "";
    this.difficult;
    this.lifes = 0;
    this.questions;
    this.roundQuestion;
    this.round = 0;
    this.correct = 0;
    this.wrong = 0;
    this.result;
    this.intervalId;
  }

  settingUpGame(name, difficult) {
    this.name = name;
    if (difficult === "easy") {
      this.difficult = difficult;
      this.lifes = 3;
      lifesImg.classList.add("life-easy");
      lifesImg.src = `./assets/${this.difficult}/${this.lifes}-lifes.png`;
      this.questions = questions.easy.sort(() => Math.random() - 0.5);
      this.roundQuestion = this.questions[this.round];
    }
    if (difficult === "normal") {
      this.difficult = difficult;
      this.lifes = 2;
      lifesImg.classList.add("life-normal");
      lifesImg.src = `./assets/${this.difficult}/${this.lifes}-lifes.png`;
      this.questions = questions.normal.sort(() => Math.random() - 0.5);
      this.roundQuestion = this.questions[this.round];
    }
    if (difficult === "hard") {
      this.difficult = difficult;
      this.lifes = 1;
      lifesImg.classList.add("life-hard");
      lifesImg.src = `./assets/${this.difficult}/${this.lifes}-lifes.png`;
      this.questions = questions.hard.sort(() => Math.random() - 0.5);
      this.roundQuestion = this.questions[this.round];
    }
  }

  settingNextQuestion() {
    this.round++;
    this.roundQuestion = this.questions[this.round];
  }

  startTimer() {
    let timer = 10;
    timeDisplay.style.color = "#221b1c";
    this.intervalId = setInterval(() => {
      if (timer <= 4) {
        timeDisplay.style.color = "#ff0842";
      }
      if (timer === 0) {
        return;
      }
      timer--;
      time.innerText = `0${timer}`;

      if (timer <= 0) {
        clearInterval(this.intervalId);

        this.wrongAnswer();

        setTimeout(() => {
          if (this.lifes === 0) {
            settingUpEnd();
            return;
          }
          lifesImg.src = `./assets/${this.difficult}/${this.lifes}-lifes.png`;
          printQuestion();
        }, 2000);
      }
    }, 1000);
  }

  checkAnswer(answer) {
    if (answer.innerText === this.roundQuestion.answer) {
      const audioCorrect = new Audio(`./assets/${this.difficult}/correct.mp3`);
      audioCorrect.volume = 0.1;
      audioCorrect.play();
      this.correct++;
      answer.style.backgroundColor = "#08ff31";
      this.settingNextQuestion();
    } else {
      answer.style.backgroundColor = "#ff0842";
      this.wrongAnswer();
    }
  }

  wrongAnswer() {
    const audioWrong = new Audio(`./assets/${this.difficult}/wrong.mp3`);
    audioWrong.volume = 0.1;
    audioWrong.play();
    this.wrong++;
    const correctAnswer = document.querySelector("#correct");
    correctAnswer.style.backgroundColor = "#08ff31";
    this.lifes--;
    this.settingNextQuestion();
  }

  checkStatus() {
    if (this.lifes === 0 || this.round === this.questions.length - 1) {
      return "dead";
    } else {
      lifesImg.src = `./assets/${this.difficult}/${this.lifes}-lifes.png`;
    }
  }

  setResult() {
    if (this.correct / (this.correct + this.wrong) >= 0.65) {
      this.result = "good";
    } else {
      this.result = "bad";
    }
    endPic.src = `./assets/${this.difficult}/${this.result}.png`;
  }
}
