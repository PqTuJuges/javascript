import { lireCookie, ecrireCookie, supprimerCookie } from "./utilitairesCookies.js";

const NOM_COOKIE = "consentement";
const DUREE_JOURS = 30;

let banniereElem = null;
let btnAccepterElem = null;
let btnReinitialiserElem = null;

export const initialiserBanniereConsentement = () => {
    banniereElem = document.querySelector("#banniere");
    btnAccepterElem = document.querySelector("#btn-accepter");
    btnReinitialiserElem = document.querySelector("#btn-reinitialiser");
    if(!banniereElem || !btnAccepterElem || !btnReinitialiserElem){
        console.warn("Bannière consentement non initialisée : un ou plusieurs éléments introuvables.")
        return;
    }
    console.log("Bannière consentement initialisée")
}
const verifierConsentement = () => {
    const valeur = lireCookie(NOM_COOKIE)
    if(valeur){
        return lireCookie;
    }else{
        return null;
    }
}