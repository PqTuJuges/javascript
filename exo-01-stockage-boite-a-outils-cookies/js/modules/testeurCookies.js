import { lireCookie, ecrireCookie, supprimerCookie } from "./utilitairesCookies.js";
let etatCookiesElem = null;

const rafraichirAffichage = () => {
    etatCookiesElem.textContent = document.cookie;
    if (document.cookie === "") {
        etatCookiesElem.textContent = "Aucun cookie présent";
    }
};  
export const initialiserTesteurCookies = () => {
    const btnEcrireElem = document.querySelector("#btn-ecrire");
    const btnLireElem = document.querySelector("#btn-lire");
    const btnSupprimerElem = document.querySelector("#btn-supprimer");
    etatCookiesElem = document.querySelector("#etat-cookies");
    if (!btnEcrireElem || !btnLireElem || !btnSupprimerElem || !etatCookiesElem) {
        console.warn("Testeur cookies non initialisé : un ou plusieurs éléments introuvables.")
        return;
    }
    rafraichirAffichage();

    btnEcrireElem.addEventListener("click", gererEcriture);
    btnLireElem.addEventListener('click' , gererLecture);
    btnSupprimerElem.addEventListener('click', gererSuppression);
}
const gererEcriture = () => {
    const nom = document.querySelector("#ecrire-nom").value;
    const valeur = document.querySelector("#ecrire-valeur").value;
    const jours = document.querySelector("#ecrire-jours").value;
    Number(jours);
    if (nom === "" || isNaN(jours) || jours < 0) {
        return;
    }
    ecrireCookie(nom, valeur, jours);
    rafraichirAffichage();
}
const gererLecture = () => {
    const nom = document.querySelector("#lire-nom").value;
    const resultat = lireCookie(nom);
    const lireResultat = document.querySelector("#lire-resultat");
    lireResultat.textContent = (resultat === null)
        ? "Cookie introuvable" : resultat;
}
const gererSuppression = () => {
    const nom = document.querySelector("#supprimer-nom").value;
    if(nom ===""){
        return;
    }
    supprimerCookie(nom);
    rafraichirAffichage();
}