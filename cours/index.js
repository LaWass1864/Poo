/* Le code crée une variable constante nommée `obj` et lui attribue un objet avec deux propriétés :`pseudo` avec une valeur de "Wass" et `ville` avec une valeur de "St-Denis". */
const obj = {
  //index:value
  pseudo: "Wass",
  ville: "St-Denis",
  admin: true
};

// Ajouter une valeur dans .obj
/* `(obj.age = 24)` ajoute une nouvelle propriété `age` à l'objet `obj` et lui attribue une valeur de
24. */
(obj.age = 24), 
obj["admin"] = false

// Modifier un parametre
obj.pseudo = "Wassou"e

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



