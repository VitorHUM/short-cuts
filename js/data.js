const questions = {
  easy: [
    {
      question: "Atalho para: Copiar linha ou seleção",
      alternatives: ["Ctrl + X", "Ctrl + Z", "Ctrl + V", "Ctrl + C"],
      answer: "Ctrl + C",
    },
    {
      question: "Atalho para: Selecionar linha atual",
      alternatives: ["Ctrl + L", "Ctrl + A", "Ctrl + T", "Ctrl + B"],
      answer: "Ctrl + L",
    },
    {
      question: "Atalho para: Ir para o final do arquivo",
      alternatives: ["Ctrl + End", "Ctrl + Home", "Alt + End", "Shift + End"],
      answer: "Ctrl + End",
    },
    {
      question: "Atalho para: Ir para o começo do arquivo",
      alternatives: ["Ctrl + Home", "Ctrl + End", "Alt + Home", "Shift + Home"],
      answer: "Ctrl + Home",
    },
    {
      question: "Atalho para: Mostrar sugestões",
      alternatives: ["Ctrl + Space", "Ctrl + S", "Ctrl + H", "Ctrl + P"],
      answer: "Ctrl + Space",
    },
    {
      question: "Atalho para: Pesquisar em TODOS arquivos abertos",
      alternatives: [
        "Ctrl + Shift + F",
        "Ctrl + F",
        "Ctrl + Alt + F",
        "Shift + Alt + F",
      ],
      answer: "Ctrl + Shift + F",
    },
    {
      question: "Atalho para: Colar linha ou seleção",
      alternatives: ["Ctrl + X", "Ctrl + C", "Ctrl + V", "Ctrl + Z"],
      answer: "Ctrl + V",
    },
    {
      question: "Atalho para: Dar zoom",
      alternatives: ["Ctrl + =", "Ctrl + Z", "Ctrl + /", "Ctrl + J"],
      answer: "Ctrl + =",
    },
    {
      question: "Atalho para: Inserir linha abaixo",
      alternatives: [
        "Ctrl + Enter",
        "Ctrl + Shift + Enter",
        "Ctrl + L",
        "Ctrl + Shift + L",
      ],
      answer: "Ctrl + Enter",
    },
    {
      question: "Atalho para: Cortar linha ou seleção",
      alternatives: ["Ctrl + Z", "Ctrl + X", "Ctrl + C", "Ctrl + V"],
      answer: "Ctrl + X",
    },
    {
      question: "Atalho para: Salvar o arquivo",
      alternatives: ["Alt + S", "Ctrl + S", "Alt + F4", "F13"],
      answer: "Ctrl + S",
    },
    {
      question: "Atalho para: Mostrar/Recolher a barra lateral",
      alternatives: ["Ctrl + B", "Ctrl + Shift + S", "Alt + B", "Ctrl + R"],
      answer: "Ctrl + B",
    },
    {
      question: "Atalho para: Criar novo arquivo",
      alternatives: ["Ctrl + N", "Ctrl + A ", "Ctrl + Alt + N", "Ctrl + J"],
      answer: "Ctrl + N",
    },
    {
      question: "Atalho para: Comentar/Descomentar a linha",
      alternatives: ["Ctrl + C", "Ctrl + /", "Ctrl + *", "Ctrl + `"],
      answer: "Ctrl + /",
    },
    {
      question: "Atalho para: Entrar no modo tela cheia",
      alternatives: ["F11", "F12", "F10", "F9"],
      answer: "F11",
    },
    {
      question: "Atalho para: Desfazer",
      alternatives: ["Ctrl + Z", "Ctrl + U", "Ctrl + D", "Ctrl + R"],
      answer: "Ctrl + Z",
    },
  ],
  normal: [
    {
      question: "Atalho para: Abrir as configurações do usuário",
      alternatives: [
        "Ctrl + ,",
        "Ctrl + S",
        "Ctrl + Shift + S",
        "Ctrl + Shift + ,",
      ],
      answer: "Ctrl + ,",
    },
    {
      question: "Atalho para: Inserir linha acima",
      alternatives: [
        "Ctrl + Enter",
        "Ctrl + Shift + Enter",
        "Ctrl + L",
        "Ctrl + Shift + L",
      ],
      answer: "Ctrl + Shift + Enter",
    },
    {
      question: "Atalho para: Criar bloco de comentário",
      alternatives: [
        "Shift + Alt + A",
        "Shift + Alt + C",
        "Shift + Alt + D",
        "Shift + Alt + B",
      ],
      answer: "Shift + Alt + A",
    },
    {
      question: "Atalho para: Refazer",
      alternatives: ["Ctrl + Y", "Ctrl + R", "Ctrl + Z", "Ctrl + S"],
      answer: "Ctrl + Y",
    },
    {
      question: "Atalho para: Voltar o mouse para a posição anterior",
      alternatives: ["Ctrl + U", "Ctrl + M", "Ctrl + L", "Ctrl + B"],
      answer: "Ctrl + U",
    },
    {
      question: "Atalho para: Dividir a tela",
      alternatives: ["Ctrl + \\", "Ctrl + S", "Ctrl + D", "Ctrl + /"],
      answer: "Ctrl + \\",
    },
    {
      question: "Atalho para: Abrir a página de atalhos",
      alternatives: [
        "Ctrl + K Ctrl + S",
        "Ctrl + S",
        "Ctrl + K Ctrl + K",
        "Ctrl + Alt + S",
      ],
      answer: "Ctrl + K Ctrl + S",
    },
    {
      question: "Atalho para: Mostrar lista de comandos",
      alternatives: [
        "Ctrl + Shift + P",
        "Ctrl + P",
        "Ctrl + Shift + C",
        "Ctrl + L",
      ],
      answer: "Ctrl + Shift + P",
    },
    {
      question: "Atalho para: Pesquisar no explorador de arquivos",
      alternatives: ["Ctrl + P", "Ctrl + F", "Ctrl + N", "Ctrl + Q"],
      answer: "Ctrl + P",
    },
    {
      question: "Atalho para: Abrir o painel de extensões",
      alternatives: [
        "Ctrl + Shift + X",
        "Ctrl + Shift + E",
        "Ctrl + X",
        "Ctrl + E",
      ],
      answer: "Ctrl + Shift + X",
    },
    {
      question: "Atalho para: Abrir o terminal",
      alternatives: ["Ctrl + =", "Ctrl + ~", "Ctrl + /", "Ctrl + `"],
      answer: "Ctrl + `",
    },
    {
      question: "Atalho para: Criar um novo terminal",
      alternatives: [
        "Ctrl + Shift + `",
        "Ctrl + Alt + `",
        "Ctrl + T",
        "Ctrl + Alt + T",
      ],
      answer: "Ctrl + Shift + `",
    },
    {
      question: "Atalho para: Ir para linha",
      alternatives: [
        "Ctrl + G + número da linha",
        "Ctrl + F + número da linha",
        "Ctrl + L + número da linha",
        "Ctrl + L + número da linha",
      ],
      answer: "Ctrl + G + número da linha",
    },
    {
      question: "Atalho para: Mover linha para cima ou baixo",
      alternatives: [
        "Ctrl + ↑/↓",
        "Alt + ↑/↓",
        "Shift + Alt + ↓/↑",
        "Shift + Ctrl + ↓/↑",
      ],
      answer: "Alt + ↑/↓",
    },
  ],
  hard: [
    {
      question: "Atalho para: Deletar linha",
      alternatives: [
        "Ctrl + Shift + Delete",
        "Ctrl + Delete",
        "Ctrl + Shift + R",
        "Ctrl + Shift + K",
      ],
      answer: "Ctrl + Shift + K",
    },
    {
      question: "Atalho para: Expandir seleção",
      alternatives: [
        "Shift + Alt + E",
        "Shift + Alt + →",
        "Ctrl + →",
        "Alt + S",
      ],
      answer: "Shift + Alt + →",
    },
    {
      question: "Atalho para: Abrir menu de substituição",
      alternatives: ["Ctrl + F", "Ctrl + R", "Ctrl + H", "Ctrl + Shift + F"],
      answer: "Ctrl + H",
    },
    {
      question: "Atalho para: Selecionar todas as ocorrências da palavra atual",
      alternatives: ["Ctrl + F2", "Ctrl + L", "Ctrl + H", "Ctrl + Shift + F"],
      answer: "Ctrl + F2",
    },
    {
      question: "Atalho para: Inserir o cursor em vários lugares",
      alternatives: [
        "Alt + Click",
        "Ctrl + Click",
        "Ctrl + Alt + Click",
        "Shift + Alt + Click",
      ],
      answer: "Alt + Click",
    },
    {
      question: "Atalho para: Entrar no modo Zen",
      alternatives: ["Ctrl + F1", "Ctrl + K M", "Ctrl + Z M", "Ctrl + K Z"],
      answer: "Ctrl + K Z",
    },
    {
      question: "Atalho para: Copiar linha para cima ou baixo",
      alternatives: [
        "Shift + Alt + ↓/↑",
        "Ctrl + C + ↓/↑",
        "Alt + ↓/↑",
        "Shift + ↓/↑",
      ],
      answer: "Shift + Alt + ↓/↑",
    },
    {
      question: "Atalho para: Recolher todos blocos de execução",
      alternatives: [
        "Ctrl + K Ctrl + 0",
        "Ctrl + K Ctrl + F",
        "Ctrl + K Ctrl + R",
        "Ctrl + K Z",
      ],
      answer: "Ctrl + K Ctrl + 0",
    },
    {
      question:
        "Em arquivos 'Markdown' qual o atalho para: Mostrar uma prévia na lateral",
      alternatives: ["Ctrl + K S", "Ctrl + K P", "Ctrl + K M", "Ctrl + K V"],
      answer: "Ctrl + K V",
    },
    {
      question:
        "Atalho para: Abrir o atual arquivo no explorador de arquivos do Windows",
      alternatives: ["Ctrl + K R", "Ctrl + K X", "Ctrl + K F", "Ctrl + K W"],
      answer: "Ctrl + K R",
    },
    {
      question: "Atalho para: Reabrir arquivo fechado",
      alternatives: [
        "Ctrl + Shift + T",
        "Ctrl + Shift + R",
        "Ctrl + Shift + O",
        "Ctrl + Shift + A",
      ],
      answer: "Ctrl + Shift + T",
    },
    {
      question: "Atalho para: Ir para a chave correspondente",
      alternatives: [
        "Ctrl + Shift + \\",
        "Ctrl + Shift + B",
        "Ctrl + Shift + C",
        "Ctrl + Shift + {",
      ],
      answer: "Ctrl + Shift + \\",
    },
  ],
};
