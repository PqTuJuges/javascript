const CLE_STORAGE = "listeCourses";

let formAjoutElem = null;
let inputProduitElem = null;
let listeElem = null;
let etatVideElem = null;
let nbItemsElem = null;
let btnEffacerElem = null;
let zoneMessageElem = null;
let produits = [];

const chargerDepuisStorage = () => {
    const donnees = localStorage.getItem(CLE_STORAGE);
    if (donnees !== null) {
        produits = JSON.parse(donnees);
    }
}

const sauvegarderDansStorage = () => {
    localStorage.setItem(CLE_STORAGE, JSON.stringify(produits));
}

const afficherListe = () => {
    listeElem.innerHTML = "";
    for (let i = 0; i < produits.length; i++) {
        const produit = produits[i];
        const li = document.createElement("li");
        li.textContent = produit;
        const btnSupprimer = document.createElement("button");
        btnSupprimer.textContent = "Supprimer";
        btnSupprimer.setAttribute("data-index", i);
        btnSupprimer.setAttribute("aria-label", `Supprimer ${produit} de la liste de courses`);
        li.appendChild(btnSupprimer);
        listeElem.appendChild(li);
    }
    nbItemsElem.textContent = produits.length;
    etatVideElem.hidden = produits.length > 0;
    btnEffacerElem.disabled = produits.length === 0;
}

const gererAjout = (event) => {
    event.preventDefault(); // empêcher le rechargement de page

    const texte = inputProduitElem.value.trim();

    if (texte === "") {
        // Feedback sans alerte bloquante
        zoneMessageElem.textContent = "Veuillez saisir un nom de produit.";
        inputProduitElem.focus();
        return;
    }

    produits.push(texte);
    sauvegarderDansStorage();
    afficherListe();

    // Réinitialiser le champ
    inputProduitElem.value = "";
    inputProduitElem.focus();

    // Étape 07 – Accessibilité : annonce aria-live
    zoneMessageElem.textContent = `Produit ajouté : ${texte}`;
}

const gererSuppression = (event) => {
    const cible = event.target;

    // On n'agit que si le clic vient d'un bouton "Supprimer"
    if (!cible.matches("button[data-index]")) return;

    const index = Number(cible.dataset.index); // texte → nombre
    const nomProduit = produits[index];

    produits.splice(index, 1);
    sauvegarderDansStorage();
    afficherListe();

    // Étape 07 – Accessibilité : annonce + gestion du focus
    zoneMessageElem.textContent = `Produit supprimé : ${nomProduit}`;

    // Déplacer le focus vers le bouton suivant s'il existe, sinon vers l'input
    const boutonsSuivants = listeElem.querySelectorAll("button[data-index]");
    if (boutonsSuivants.length > 0) {
        // On tente l'index original ; si hors-limites on prend le dernier
        const nouvelIndex = index < boutonsSuivants.length ? index : boutonsSuivants.length - 1;
        boutonsSuivants[nouvelIndex].focus();
    } else {
        inputProduitElem.focus();
    }
}

const gererEffacement = () => {
    produits.length = 0;           
    localStorage.removeItem(CLE_STORAGE); 
    sauvegarderDansStorage();
    afficherListe();

    // Étape 07 – Accessibilité
    zoneMessageElem.textContent = "Liste vidée.";
    inputProduitElem.focus();
}
export const initialiserListeCourses = (selecteurs) => {
    formAjoutElem = document.querySelector(selecteurs.formAjout);
    inputProduitElem = document.querySelector(selecteurs.inputProduit);
    listeElem = document.querySelector(selecteurs.liste);
    etatVideElem = document.querySelector(selecteurs.etatVide);
    nbItemsElem = document.querySelector(selecteurs.nbItems);
    btnEffacerElem = document.querySelector(selecteurs.btnEffacer);
    zoneMessageElem = document.querySelector(selecteurs.zoneMessage);

    if (!formAjoutElem || !inputProduitElem || !listeElem || !etatVideElem || !nbItemsElem || !btnEffacerElem) {
        console.warn("Liste de courses non initialisée : un ou plusieurs éléments introuvables.");
        return;
    }
    chargerDepuisStorage();
    afficherListe();
    formAjoutElem.addEventListener("submit", gererAjout);
    listeElem.addEventListener("click", gererSuppression);
    btnEffacerElem.addEventListener("click", gererEffacement);
};
