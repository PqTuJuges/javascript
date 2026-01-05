'use strict'

const prixBruts = ["12", " 8 ", "15.5", ""];

let prixNettoyes = [];
let total = 0;

for ( let i = 0; i < prixBruts.length; i++) {

    let valeur = prixBruts[i];

    //Pour surprimer les espaces
    valeur = valeur.trim();

    // ignore si vide 
    if (valeur === "") {
        continue;
    }

    //ce qui reste convertie en nombre
    let nombre = Number(valeur);

    //ignore la si la conversion échoue
    if (isNaN(nombre)) {
        continue;
    }
    //ajt les valeurs bonnes au tableau
    prixNettoyes.push(nombre);
    total = total + nombre;
}
console.log("Prix nettoyé : "+ prixNettoyes);
console.log("Total : "+ total);