'use strict';
const nombreMystere = Math.floor(Math.random() * 20) + 1;
let compteur = 0;
while (true) {
    let nombre = prompt("Trouvez le nombre mystère : ");
    compteur++;
    if (nombre > nombreMystere) {
        console.log("Le nombre mystère est plus petit!");
    } else if (nombre < nombreMystere) {
        console.log("Le nombre mystère est plus grand!");
    } else {
        break;
    }
}
console.log("Félicitations, vous avez découvert le nombre mystère :" + nombre + "en" + compteur + "tentatives")


