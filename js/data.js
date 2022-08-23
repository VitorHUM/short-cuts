const questions = {
  easyQuestions: [
    {
      question: "Copiar linha ou seleção",
      alternatives: ["Ctrl + X", "Ctrl + Z", "Ctrl + V", "Ctrl + C"],
      answer: "Ctrl + C",
    },
    {
      question: "Colar linha ou seleção",
      alternatives: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
      answer: "Ctrl + V",
    },
    {
      question: "Cortar linha ou seleção",
      alternatives: ["Ctrl + Z", "Ctrl + X", "Ctrl + C", "Ctrl + V"],
      answer: "Ctrl + X",
    },
  ],
  normalQuestions: [
    {
      question: "Pesquisar no explorador de arquivos",
      alternatives: ["Ctrl + P", "Ctrl + F", "Ctrl + N", "Ctrl + Q"],
      answer: "Ctrl + P",
    },
    {
      question: "Abrir o terminal",
      alternatives: ["Ctrl + =", "Ctrl + ~", "Ctrl + /", "Ctrl + `"],
      answer: "Ctrl + `",
    },
    {
      question: "Mover linha para cima ou baixo",
      alternatives: [
        "Ctrl + ↑/↓",
        "Alt + ↑/↓",
        "Shift + Alt + ↓/↑",
        "Shift + Ctrl + ↓/↑",
      ],
      answer: "Alt + ↑/↓",
    },
  ],
  hardQuestions: [
    {
      question: "Deletar linha",
      alternatives: [
        "Ctrl + Shift + Delete",
        "Ctrl + Delete",
        "Ctrl + Shift + R",
        "Ctrl + Shift + K",
      ],
      answer: "Ctrl + Shift + K",
    },
    {
      question: "Expandir seleção",
      alternatives: [
        "Shift + Alt + E",
        "Shift + Alt + →",
        "Ctrl + →",
        "Alt + S",
      ],
      answer: "Shift + Alt + →",
    },
    {
      question: "Abrir menu de substituição",
      alternatives: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + Shift + F"],
      answer: "Ctrl + H",
    },
  ],
};
