const donneesBrutes = ["17", null, "22", undefined, "test", "9"];

let donneesNettoyees = [];
for( i = 0; i < donneesBrutes.length; i++){

    let valeur = donneesBrutes[i];

    if(valeur === null || valeur === undefined){
        continue;
    }
    // convertie en nombre 
    let nombre = Number(valeur);

    //ignore la si la conversion échoue
    if(isNaN(nombre)){
        continue;
    }
    donneesNettoyees.push(nombre);

}
console.log("Donnees nettoyees : ", donneesNettoyees);