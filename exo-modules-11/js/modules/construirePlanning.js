// Importer les données du planning.
//
// - planning est un tableau 2D (tableau de tableaux)
//   - 1er index = jour (ligne)
//   - 2e index = créneau (colonne)
//   - "" signifie aucun cours à ce moment
//   - "JS", "HTML", ... sont des codes de cours
//
// - libellesParCode permet de convertir un code ("JS") en libellé ("JavaScript").
// - joursParIndex convertit un index de ligne (0) en nom de jour ("lundi").
// - creneauxParIndex convertit un index de colonne (2) en créneau ("soir").
import { planning, libellesParCode, joursParIndex, creneauxParIndex } from "./donneesPlanning.js";

// Construire une structure "par cours" à partir de la grille 2D.
//
// Résultat attendu : un objet dont les clés sont les noms complets des cours,
// et dont la valeur est un objet jour -> liste de créneaux.
//
// Exemple de forme :
// {
//   "JavaScript": {
//     "lundi": ["matin"],
//     "mardi": ["midi"],
//   },
//   "PHP": {
//     "mardi": ["matin"],
//   }
// }
export const construirePlanning = () =>
{
    // Objet résultat.
    // On l'utilise ici plutôt qu'un tableau car on veut retrouver un cours via son nom.
    const planningParCours = {};

    // Nombre de jours = nombre de lignes dans le tableau 2D.
    const nbrJours = planning.length;

    // Parcourir chaque jour (ligne).
    for (let j = 0; j < nbrJours; j++)
    {
        // Nombre de créneaux = nombre de colonnes sur la ligne du jour courant.
        const nbrCreneaux = planning[j].length;

        // Parcourir chaque créneau (colonne).
        for (let c = 0; c < nbrCreneaux; c++)
        {
            // Récupérer le code du cours dans la grille.
            // Exemple : "JS" ou "" (vide).
            const codeDuCours = planning[j][c];

            // Ignorer les cases vides (aucun cours prévu à ce moment).
            if (codeDuCours !== "")
            {
                // Convertir le code ("JS") en nom complet ("JavaScript").
                // Le ?? permet d'éviter une valeur undefined si un code n'est pas présent dans le dictionnaire.
                const nomDuCours = libellesParCode[codeDuCours] ?? "Cours inconnu";

                // Initialiser la structure pour ce cours si elle n'existe pas encore.
                planningParCours[nomDuCours] = planningParCours[nomDuCours] ?? {};

                // Convertir les index (j, c) en libellés lisibles.
                const jourNom = joursParIndex[j];
                const creneauNom = creneauxParIndex[c];

                // Initialiser la liste des créneaux pour ce jour si nécessaire.
                planningParCours[nomDuCours][jourNom] = planningParCours[nomDuCours][jourNom] ?? [];

                // Ajouter le créneau à la liste.
                planningParCours[nomDuCours][jourNom].push(creneauNom);
            }
        }
    }
    // Retourner l'objet final structuré par cours.
    return planningParCours;
};