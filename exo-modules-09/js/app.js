// Importer la fonction "genererMoyenneNotesParNom()" depuis le module "genererMoyenneNotesParNom.js".
import { genererMoyenneNotesParNom } from "./modules/genererMoyenneNotesParNom.js";

// Appeler la fonction qui calcule et retourne un tableau de résultats.
// On stocke ce tableau dans une constante pour pouvoir le parcourir ensuite.
const moyenneNotesParNom = genererMoyenneNotesParNom();

// Parcourir chaque résultat et l'afficher.
for (const etudiant of moyenneNotesParNom)
{
    console.log(`Moyenne de ${etudiant.nom} : ${etudiant.moyenne}`);
}
