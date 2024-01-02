/* Le code crée une variable constante nommée `obj` et lui attribue un objet avec deux propriétés :`pseudo` avec une valeur de "Wass" et ville` avec une valeur de "St-Denis". */
const obj = {
  //index:value
  pseudo: "Wass",
  ville: "St-Denis",
  admin: true,

  direBonjour: function () {
    console.log("Bonjour je suis " + this.pseudo);
  },
};

// Ajouter une valeur dans .obj
/* `(obj.age = 24)` ajoute une nouvelle propriété `age` à l'objet `obj` et lui attribue une valeur de 24. */
(obj.age = 24), (obj["admin"] = false);

// Modifier un parametre
obj.pseudo = "wass";

// Supprimer un parametre
delete obj.ville;
// console.log(obj);

// Chercher s'il y a une propriété qui existe
// console.log("pseudo" in obj);
// console.log("ville" in obj);

// Parcourir l'objet
for (const key in obj) {
  console.log(key + " : " + obj[key]);
}
// console.log(obj.direBonjour());

// Méthodes natives dans JavaScript

/* `keys` est une variable qui stocke un tableau de toutes les clés (noms de propriété) de l'objet `obj`. Il est obtenu à l'aide de la méthode
`Object.keys()`, qui renvoie un tableau des noms de propriétés énumérables d'un
objet. */
const keys = Object.keys(obj);
console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj);
console.log(values);

const nestedArray = Object.entries(obj);
console.log(nestedArray);

// Fusionner des objets entre eux

const obj2 = {
  taille: "1m78",
  poids: "60kg",
  pseudo: "wassou",
};

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// Empecher les modifications
// const newObj = Object.freeze(obj);
/* `const newObj = Object.seal(obj)` scelle l'objet `obj`, ce qui signifie qu'il empêche l'ajout de nouvelles propriétés ou la suppression de propriétés existantes. Cependant, il permet toujours de
modifier les propriétés existantes. L'objet scellé `newObj` est une version modifiée de `obj` avec ces restrictions appliquées. */
const newObj = Object.seal(obj);
newObj.pseudo = "Wassila";
newObj.adress = "42 avenue du code";
console.log(newObj);

// Constructeur d'objet si nous avons plusieurs utilisateurs par ex...
// Fonction constructeur
function User(pseudo, ville) {
  this.pseudo = pseudo;
  this.ville = ville;

  this.getCity = function () {
    console.log(this.pseudo + " habite à " + this.ville);
  };
}

const user1 = new User("Wass", "St-denis");
const user2 = new User("Denis", "Nantes");
const user3 = new User("Marie", "Paris");

/* `console.log(user2.getCity());` appelle la méthode `getCity` sur l'objet `user2` et enregistre le résultat sur la console. La méthode `getCity` est définie dans la fonction constructeur `User` et
enregistre un message qui inclut le pseudo et la ville de l'utilisateur sur la console. */
console.log(user2.getCity());

// Factory functions

function User3(pseudo, ville) {
  return {
    pseudo,
    ville,
  };
}

const user4 = User3('Nono", "Toronto"');
console.log(user4);

// -------------------
// création de class
//-------------------

class Utilisateur {
  constructor(pseudo, ville) {
    this.pseudo = pseudo;
    this.ville = ville;
  }
  // Méthodes
  sayMyName = function () {
    console.log("Bonjour je suis " + this.pseudo);
  };
}

const user5 = new Utilisateur("Samia", "Lyon");
// Pas de fonction fléchées en POO
Utilisateur.prototype.sayCity = function () {
  console.log("J'habite à " + this.ville);
};


Object.assign(Utilisateur.prototype, {
  method1() {

  },
  method2() {

  }
})

console.log(user5);

//------------
// l'héritage
// ------------

class Animal {
  constructor(nom, age) {
  this.nom = nom;
  this.age = age
}
saySomething(text) {
  console.log(this.name + " dit : " + text);
}
}

class Dog extends Animal {
  run() {
    console.log("Le chien court");
  }
}

class Cat extends Animal {
  hunt() {
    console.log("J'ai tué un poisson");
  }
}
const rintintin = new Dog("Rintintin", 9)

console.log(rintintin);