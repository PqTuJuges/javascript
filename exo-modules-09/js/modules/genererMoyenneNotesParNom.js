// Importer les données contenant les notes de chaque étudiant.
// Chaque élément du tableau représente un étudiant avec son nom et ses notes.
import { notesParNom } from "./donneesNotes.js";

// Importer la fonction utilitaire qui calcule la moyenne d'un tableau de notes.
import { calculerMoyenne } from "./calculerMoyenne.js";

// Génère une nouvelle liste contenant, pour chaque étudiant,
// son nom et la moyenne de ses notes.
export const genererMoyenneNotesParNom = () =>
{
    // Tableau qui contiendra le résultat final.
    // Chaque élément aura la forme : { nom: "...", moyenne: ... }
    const moyennesParNom = [];

    // Parcourir la liste des étudiants et de leurs notes.
    for (const etudiant of notesParNom)
    {
        // Construire un nouvel objet pour l'étudiant courant
        // sans modifier les données d'origine.
        moyennesParNom.push({
            nom: etudiant.nom,
            moyenne: calculerMoyenne(etudiant.notes)
        });
    }

    // Retourner la liste complète des moyennes par étudiant.
    return moyennesParNom;
};