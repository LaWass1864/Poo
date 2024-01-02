/* Le code crée une variable constante nommée `obj` et lui attribue un objet avec deux propriétés :`pseudo` avec une valeur de "Wass" et ville` avec une valeur de "St-Denis". */
const obj = {
  //index:value
  pseudo: "Wass",
  ville: "St-Denis",
  admin: true,

  direBonjour: function() {
    console.log("Bonjour je suis " + this.pseudo);
  }
};

// Ajouter une valeur dans .obj
/* `(obj.age = 24)` ajoute une nouvelle propriété `age` à l'objet `obj` et lui attribue une valeur de 24. */
(obj.age = 24), 
obj["admin"] = false

// Modifier un parametre
obj.pseudo = "wass"

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

/* `const keys = Object.keys(obj)` est une méthode en JavaScript qui renvoie un tableau des noms de propriétés de l'objet. Dans ce cas, il renvoie un tableau des noms de propriétés de l'objet `obj` et l'affecte à la constante `keys`. */
const keys = Object.keys(obj)
console.log(keys);

// Obtenir les valeurs
const values = Object.values(obj)
console.log(values);

const nestedArray = Object.entries(obj)
console.log(nestedArray);

// Fusionner des objets entre eux

const obj2 = {
    taille: "1m78",
    poids: "60kg",
    pseudo: "wassou"
}

const fusion = Object.assign({}, obj, obj2);
console.log(fusion);

// Empecher les modifications
const newObj = Object.freeze(obj);
/* `const newObj = Object.seal(obj)` scelle l'objet `obj`, ce qui signifie qu'il empêche l'ajout de nouvelles propriétés ou la suppression de propriétés existantes. Cependant, il permet toujours de
modifier les propriétés existantes. L'objet scellé `newObj` est une version modifiée de `obj` avec
ces restrictions appliquées. */
const newObj1 = Object.seal(obj)
newObj.pseudo = "Wassila"
newObj.adress = "42 avenue du code"
console.log(newObj);

// Constructeur d'objet
