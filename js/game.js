const lifesImg = document.querySelector(".life");

class Quiz {
  constructor() {
    this.name = "";
    this.difficult;
    this.lifes = 0;
    this.time = 10;
    this.questions;
    this.roundQuestion;
    this.round = 0;
    this.streak = 0;
    this.correct = 0;
    this.wrong = 0;
    this.intervalId;
  }

  settingUpGame(name, difficult) {
    this.name = name;
    if (difficult === "VITOR") {
      this.difficult = "easyQuestions";
      this.lifes = 3;
      lifesImg.classList.add("life-easy");
      lifesImg.src = `./assets/${this.difficult}-${this.lifes}-lifes.png`;
      this.questions = questions.easyQuestions.sort(() => Math.random() - 0.5);
      this.roundQuestion = this.questions[this.round];
    }
    if (difficult === "JINO") {
      this.difficult = "normalQuestions";
      this.lifes = 2;
      lifesImg.classList.add("life-normal");
      lifesImg.src = `./assets/${this.difficult}-${this.lifes}-lifes.png`;
      this.questions = questions.normalQuestions.sort(
        () => Math.random() - 0.5
      );
      this.roundQuestion = this.questions[this.round];
    }
    if (difficult === "KAREN") {
      this.difficult = "hardQuestions";
      this.lifes = 1;
      lifesImg.classList.add("life-hard");
      lifesImg.src = `./assets/${this.difficult}-${this.lifes}-lifes.png`;
      this.questions = questions.hardQuestions.sort(() => Math.random() - 0.5);
      this.roundQuestion = this.questions[this.round];
    }
  }

  settingNextQuestion() {
    this.round++;
    this.roundQuestion = this.questions[this.round];
  }

  checkAnswer(answer) {
    if (answer.innerText === this.roundQuestion.answer) {
      // PLAY SOUND
      this.streak++;
      this.correct++;
      answer.style.backgroundColor = "#08ff31";
      this.settingNextQuestion();
    } else {
      // PLAY SOUND
      this.settingNextQuestion();
      this.streak = 0;
      this.wrong++;
      answer.style.backgroundColor = "#ff0842";
      const correctAnswer = document.querySelector("#correct");
      correctAnswer.style.backgroundColor = "#08ff31";
      this.lifes--;
      console.log(this.lifes);
      if (this.lifes === 0) {
        return;
      }
      lifesImg.src = `./assets/${this.difficult}-${this.lifes}-lifes.png`;
    }
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      this.time--;
      time.innerText = `0${this.time}`;
      if (this.time === 0) {
        setTimeout(() => {
          clearInterval(this.intervalId);
          this.lifes--;
        }, 100);
      }
    }, 1000);
  }

  checkStatus() {
    if (this.lifes === 0) {
      return true;
    } else if (this.streak === 3) {
      this.streak = 0;
    }

    return false;
  }
}
