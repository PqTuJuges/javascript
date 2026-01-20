// Importer la fonction "construirePlanning()" depuis le module "construirePlanning.js".
// Cette fonction transforme la grille 2D des cours en une structure plus pratique à exploiter.
//
// Elle retourne un objet organisé ainsi :
// - 1er niveau : nom du cours (clé)
// - 2e niveau : nom du jour (clé)
// - valeur : liste des créneaux pour ce jour
//
// Exemple de forme retournée :
// {
//   "JavaScript": {
//     "lundi": ["matin"],
//     "mardi": ["midi"]
//   },
//   "PHP": {
//     "mardi": ["matin"],
//     "vendredi": ["soir"]
//   }
// }
import { construirePlanning } from "./modules/construirePlanning.js";

// Générer le planning complet.
// "planningParCours" est un objet, pas un tableau.
const planningParCours = construirePlanning();

// Parcourir les cours.
// for...in parcourt les clés d'un objet.
// Ici, "cours" contient le nom du cours (ex.: "JavaScript", "PHP", ...).
for (const cours in planningParCours)
{
    // Récupérer l'objet associé au cours courant.
    // Sa forme est : { "lundi": ["matin", ...], "mardi": [...], ... }
    const planningDuCours = planningParCours[cours];

    // Construire un message lisible pour la console.
    let message = `Cours : ${cours}\n`;

    // Parcourir les jours de ce cours.
    // Ici, "jour" contient la clé du jour (ex.: "lundi").
    for (const jour in planningDuCours)
    {
        // Récupérer la liste des créneaux (tableau de chaînes).
        const creneaux = planningDuCours[jour];

        // join(", ") transforme le tableau en une chaîne lisible.
        message += `- ${jour} : ${creneaux.join(", ")}\n`;
    }

    console.log(message);
}