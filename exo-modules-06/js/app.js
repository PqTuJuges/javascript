import { ajouterNom, supprimerNom , afficherNoms } from "./modules/gererListePresence.js";
ajouterNom("Lambert");
ajouterNom("Paul");
ajouterNom("Luc");
console.log(afficherNoms());

supprimerNom("Luc");

console.log(afficherNoms());
