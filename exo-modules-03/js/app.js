import { enregistrerEvenement as enregistrerEvenementUtilisateur } from "./modules/journalUtilisateur.js";
import { enregistrerEvenement as enregistrerEvenementSysteme } from "./modules/journalSysteme.js";

const messageSysteme = enregistrerEvenementSysteme("cache vidé");
const messageUtilisateur = enregistrerEvenementUtilisateur("connexion réussie");

console.log(messageUtilisateur)
console.log(messageSysteme)
