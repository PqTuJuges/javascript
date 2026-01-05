const niveaux = [
    ["slime", "slime", "dragon"],
    ["slime"],
    ["fantôme", "slime", "mage"]
];

let totalEnnemis = 0;
let ennemisRencontres = [];

for (i = 0; i < niveaux.length; i++) {
    //liste ennemis du niveau
    const niveau = niveaux[i];
    const nbEnnemis = niveau.length;

    totalEnnemis += nbEnnemis;

    console.log("Numero du niveau " + i + " Nombre ennemis qu'il y a " + nbEnnemis);

    for (const ennemi of niveau) {
        //Si ennemi pas dedans 
        if (!ennemisRencontres.includes(ennemi)) {
            //alors on ajoute
            ennemisRencontres.push(ennemi);
        }
    }
}
console.log("Total des ennemis rencontrés : "+ totalEnnemis);
console.log("Ennemis rencontrés au moins une fois : " + ennemisRencontres);