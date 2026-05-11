import { lireCookie, ecrireCookie, supprimerCookie } from "./utilitairesCookies.js";

const NOM_COOKIE = "consentement";
const DUREE_JOURS = 30;

let banniereElem = null;
let btnAccepterElem = null;
let btnReinitialiserElem = null;
let elementAvantBanniere = null;
let annonceA11yElem = null;

const annoncer = (message) => {
    if (annonceA11yElem) {
        annonceA11yElem.textContent = message;
    }
}
const restaurerFocus = () => {
    if (elementAvantBanniere && document.contains(elementAvantBanniere) && !elementAvantBanniere.hidden) {
        elementAvantBanniere.focus();
    } else {
        btnReinitialiserElem.focus();
    }
}
const afficherBanniere = () => {
    elementAvantBanniere = document.activeElement;
    banniereElem.hidden = false;
    if (btnAccepterElem) {
        btnAccepterElem.focus();
    } else {
        banniereElem.focus();
    }
    annoncer("Bannière de consentement affichée.");
}
export const initialiserBanniereConsentement = () => {
    banniereElem = document.querySelector("#banniere");
    btnAccepterElem = document.querySelector("#btn-accepter");
    btnReinitialiserElem = document.querySelector("#btn-reinitialiser");
    annonceA11yElem = document.querySelector("#annonce-a11y");
    if (!banniereElem || !btnAccepterElem || !btnReinitialiserElem || !elementAvantBanniere || !annonceA11yElem) {
        console.warn("Bannière consentement non initialisée : un ou plusieurs éléments introuvables.")
        return;
    }
    console.log("Bannière consentement initialisée")
    verifierConsentement();
    btnAccepterElem.addEventListener("click", accepterConsentement);
    btnReinitialiserElem.addEventListener("click", reinitialiserConsentement);
}

const verifierConsentement = () => {
    const valeur = lireCookie(NOM_COOKIE)
    if (valeur === null) {
        afficherBanniere();
    }
}
const accepterConsentement = () => {
    ecrireCookie(NOM_COOKIE, "accepte", DUREE_JOURS);
    banniereElem.hidden = true;
    annoncer("Consentement enregistré");
    restaurerFocus();
}

const reinitialiserConsentement = () => {
    supprimerCookie(NOM_COOKIE);
    afficherBanniere();
}
