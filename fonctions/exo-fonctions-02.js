function jouerAuNombreMystere(nombreMin,nombreMax) {
    const nombreMystere = Math.floor(Math.random() * (nombreMax - nombreMin ) + nombreMin);
    console.log(nombreMystere)
    let compteur = 0;
    let nombre = null;
    while (true) {
        nombre = prompt("Trouvez le nombre mystère entre le nombre ", nombreMin , " et le nombre max" , nombreMax , " : ");
        compteur++;
        if (nombre > nombreMystere) {
            console.log("Le nombre mystère est plus petit!");
        } else if (nombre < nombreMystere) {
            console.log("Le nombre mystère est plus grand!");
        } else {
            break;
        }
    }
    console.log("Félicitations, vous avez découvert le nombre mystère : " + nombre + " en " + compteur + " tentatives ")
}

// Appeler la fonction permettant de lancer la partie.

jouerAuNombreMystere(10,30);