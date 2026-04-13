let selectCategorieElem = null;
let carteElements = null;

export const initialiserFiltreCatalogue = (selecteurCssCategorie, selecteurCssCartes) => {
    selectCategorieElem = document.querySelector(selecteurCssCategorie);
    carteElements = document.querySelectorAll(selecteurCssCartes);
    if (selectCategorieElem === null || carteElements.length === null) {
        console.warn('Filtre catalogue non initialisé : sélecteur catégorie ou cartes introuvables.');
        return;
    }
    appliquerFiltre();
    selectCategorieElem.addEventListener('change', appliquerFiltre)
}

const appliquerFiltre = () => {
    const categorieDemandee = selectCategorieElem.value;
    console.log("Catégorie demandée :", categorieDemandee);

    for (const carteElement of carteElements) {
        const categorieCarte = carteElement.dataset.categorie;
        const estVisible = ( categorieDemandee === 'toutes' || categorieCarte === categorieDemandee);
        carteElement.hidden = !estVisible;
        
    }
}