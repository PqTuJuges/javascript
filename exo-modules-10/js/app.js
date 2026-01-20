// Importer la fonction "genererPlacesParNom()" depuis le module "genererPlacesParNom.js".
// Cette fonction retourne un tableau d'objets, par exemple :
// [
//   { nom: "...", coordonnees: [rangee, colonne] },
//   ...
// ]
import { genererPlacesParNom } from "./modules/genererPlacesParNom.js";

// Générer la liste des places à partir du module.
const placesParNom = genererPlacesParNom();

// Stocker la longueur dans une constante évite de recalculer ".length" à chaque tour de boucle.
// C'est aussi plus lisible dans un exercice.
const nbrPersonnes = placesParNom.length;

// Afficher un résumé avant de parcourir la liste.
console.log(`Nombre de personnes dans la salle : ${nbrPersonnes} !`);

// Parcourir le tableau avec une boucle for classique pour avoir accès à l'index "i".
for (let i = 0; i < nbrPersonnes; i++)
{
    // Récupérer l'objet "place" à l'index courant.
    const place = placesParNom[i];

    // Les index commencent à 0, mais un numéro de place affiché à l'écran commence à 1.
    const numeroPlace = i + 1;

    // place.coordonnees est un tableau [rangee, colonne].
    // coordonnees[0] -> rangée, coordonnees[1] -> colonne.
    console.log(`${numeroPlace} - ${place.nom} est placé(e) dans la rangée ${place.coordonnees[0]} et la colonne ${place.coordonnees[1]}`);
}
