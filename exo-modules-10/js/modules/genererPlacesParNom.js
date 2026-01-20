// Importer le plan de salle.
// "planSalle" est un tableau à 2 dimensions.
// - Chaque sous-tableau représente une rangée
// - Chaque valeur représente une place (nom d'étudiant ou chaîne vide)
import { planSalle } from "./planSalle.js";

// Générer une liste "à plat" (1D) à partir du plan (2D).
// Chaque élément retourné aura la forme :
// { nom: "Dupont", coordonnees: [rangee, colonne] }
export const genererPlacesParNom = () =>
{
    const placesParNom = [];

    // Nombre de rangées = nombre de sous-tableaux dans planSalle.
    const nbrRangees = planSalle.length;

    // Parcourir les rangées.
    for (let r = 0; r < nbrRangees; r++)
    {
        // Nombre de colonnes dans la rangée courante.
        const nbrColonnes = planSalle[r].length;

        // Parcourir les colonnes de la rangée courante.
        for (let c = 0; c < nbrColonnes; c++)
        {
            // Contenu de la place (nom ou chaîne vide).
            const nom = planSalle[r][c];

            // Si la place n'est pas vide, on l'ajoute au résultat.
            // (La chaîne vide "" est utilisée ici pour représenter une place libre.)
            if (nom !== "")
            {
                placesParNom.push({
                    nom,
                    coordonnees: [r, c],
                });
            }
        }
    }

    // Retourner la liste complète des personnes placées, avec leurs coordonnées.
    return placesParNom;
};