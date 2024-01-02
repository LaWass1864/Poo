const main = document.querySelector("main");
// Variable qui va stocker tous nos exos
let exerciceArray = [
  { pic: 0, min: 1 },
  { pic: 1, min: 1 },
  { pic: 2, min: 1 },
  { pic: 3, min: 1 },
  { pic: 4, min: 1 },
  { pic: 5, min: 1 },
  { pic: 6, min: 1 },
  { pic: 7, min: 1 },
  { pic: 8, min: 1 },
  { pic: 9, min: 1 },
];

// Class qui va lancer le minutage du chrono
class Exercice {}

// Fonctions utiles au projet
const utils = {
  pageContent: function (title, content, btn) {
    document.querySelector("h1").innerHTML = title;
    main.innerHTML = content;
    document.querySelector(".btn-container").innerHTML = btn;
  },
};

//  Les pages : parametrages & routine & terminé
// Page Commencer
const page = {
  // Page de parametrage
  lobby: function () {
    utils.pageContent(
      "Paramétrage <i id='reboot' class='fa fa-undo'></i>",
      "Exercices",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
  },
  // Page routine
  routine: function () {
    utils.pageContent("Routine", "Exercice avec chrono", null);
  },
  // Page términé
  finish: function () {
    utils.pageContent(
      "C'est términe !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'> Réinitialiser <i class='fas fa-times-circle'></i></button>"
    );
  },
};

page.finish();
