const main = document.querySelector("main");
// Variable qui va stocker tous nos exos
const exerciceArray = [
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

  // Fonction minuteur
  handleEventMinutes: function () {
    document.querySelectorAll('input[type="number').forEach((input) => {
      input.addEventListener("input", (e) => {
        exerciceArray.map((exo) => {
          if (exo.pic == e.target.id) {
            exo.min = parseInt(e.target.value);
            console.log(exerciceArray);
          }
        });
      });
    });
  },

  // Fonction fleche
  handleEventArrow: function () {
    document.querySelectorAll(".arrow").forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        let position = 0;
        exerciceArray.map((exo) => {
          if (exo.pic == e.target.dataset.pic && position !== 0) {
            [exerciceArray[position], exerciceArray[position - 1]] = [
              exerciceArray[position - 1],
              exerciceArray[position],
            ];

            page.lobby();
          } else {
            position++;
          }
        });
      });
    });
  },

  // Suppresion des items
  deleteItem: function () {
    document.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let newArr = [];
        exerciceArray.map((exo) => {
         if (exo.pic != e.target.dataset.pic) {
          newArr.push(exo);
         }
        });
        exerciceArray = newArr ;
        console.log(exerciceArray);
      });
    });
  },
};
//  Les pages : parametrages & routine & terminé
// Page Commencer
const page = {
  lobby: function () {
    /* `let mapArray` crée un tableau d'éléments HTML à l'aide de la fonction `map`. Chaque élément du tableau représente un exercice et comprend l'image de l'exercice, un champ de saisie permettant
    de définir la durée de l'exercice et des boutons permettant de parcourir et de supprimer l'exercice. */
    let mapArray = exerciceArray
      .map(
        (exo) =>
          `
      
        <li>
          <div class="card-header">
            <input type="number" id=${exo.pic} min="1" max="10" value=${exo.min}>
            <span>min</span>
          </div>
          <img src="./img/${exo.pic}.png">
          <i class="fas fa-arrow-alt-circle-left arrow" data-pic=${exo.pic}></i>
          <i class="fas fa-times-circle deleteBtn" data-pic=${exo.pic}></i>
        </li>
       
      `
      )
      .join("");

    utils.pageContent(
      "Paramétrage <i id='reboot' class='fa fa-undo'></i>",
      "<ul>" + mapArray + "</ul>",
      "<button id='start'>Commencer<i class='far fa-play-circle'></i></button>"
    );
    /* `utils.handleEventMinutes();` appelle une fonction nommée `handleEventMinutes()` à partir de
    l'objet `utils`. Cette fonction est chargée de gérer des événements liés aux champs de saisie
    qui définissent la durée de chaque exercice. */
    utils.handleEventMinutes();
    utils.handleEventArrow();
    utils.deleteItem();
  },
  // Page routine
  routine: function () {
    utils.pageContent("Routine", "Exercice avec chrono", null);
  },
  // Page términé
  finish: function () {
    utils.pageContent(
      "C'est términé !",
      "<button id='start'>Recommencer</button>",
      "<button id='reboot' class='btn-reboot'> Réinitialiser <i class='fas fa-times-circle'></i></button>"
    );
  },
};

page.lobby();
