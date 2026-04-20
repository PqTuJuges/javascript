import { catalogue } from "./donneesCatalogue.js";
let catalogueElem = null;
let listePlaylistElem = null;
let nbChansonsElem = null;
let dureeTotaleElem = null;

export const initialiserGestionnairePlaylist = (selecteurCssCatalogue, selecteurCssListePlaylist, selecteurCssNbChansons, selecteurCssDureeTotale) => {
    catalogueElem = document.querySelector(selecteurCssCatalogue);
    listePlaylistElem = document.querySelector(selecteurCssListePlaylist);
    nbChansonsElem = document.querySelector(selecteurCssNbChansons);
    dureeTotaleElem = document.querySelector(selecteurCssDureeTotale);
    if(!catalogueElem === null || !listePlaylistElem === null || !nbChansonsElem === null || !dureeTotaleElem === null){
        console.warn("Gestionnaire de playlist non initialisé : un ou plusieurs éléments introuvables");
        return;
    }
    console.log("Gestionnaire de playlist initialisé avec succès")
    genererCatalogue();
}
const convertirSecondesEnMinutes = (secondes) => {
    const minutes = Math.floor(secondes/60);
    const sec = secondes%60;
    const secondesFormatees = String(sec).padStart(2, '0');
    return `${minutes+ ":" +secondesFormatees}`;
}
const genererCatalogue = () => {
    for (let i = 0; i < catalogue.length; i++){
        const chanson = catalogue[i];
        const imgElem = genererImgElem(chanson.titre,chanson.pochette);
        const divChansonElem = document.createElement("div");
        divChansonElem.classList.add("chanson-catalogue", "js-chanson-catalogue");
        divChansonElem.dataset.id = chanson.id;
        const divInfosElem = genererDivInfoElem(chanson.titre,chanson.artiste,chanson.duree);
        
        const btnAjouterElem = document.createElement("button");
        btnAjouterElem.classList.add("btn-ajouter", "js-btn-ajouter");
        btnAjouterElem.textContent = "+ Ajouter";
        divChansonElem.append(imgElem, divInfosElem, btnAjouterElem);
        catalogueElem.append(divChansonElem);    
    }
}
const genererImgElem = (titre,pochette) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("src",pochette);
    imgElem.setAttribute("alt",`Pochette de la chanson ${titre}`);
    return imgElem;
}
const genererDivInfoElem = (titre,artiste,duree) => {
    const divInfosElem = document.createElement("div");
    divInfosElem.classList.add("infos");
    const spanTitreElem = document.createElement("span");
    spanTitreElem.classList.add("titre");
    spanTitreElem.textContent = titre;
    const spanArtisteElem = document.createElement("span");
    spanArtisteElem.classList.add("artiste");
    spanArtisteElem.textContent = artiste;
    const spanDureeElem = document.createElement("span");
    spanDureeElem.classList.add("duree");
    spanDureeElem.textContent = convertirSecondesEnMinutes(duree);
    divInfosElem.append(spanArtisteElem,spanTitreElem,spanDureeElem);
    return divInfosElem;
}
