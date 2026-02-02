export const execExo01 = () => {
    console.log(" ----- Exo 01 -----");
    const statuElem = document.querySelector('#exo01-statut');
    const boutonToggleElem = document.querySelector('#exo01-btn-toggle');

    if (!statuElem || !boutonToggleElem) {
        console.log("manque element")
        return;
    }
    const texteOrigine = statuElem.textContent;
    const texteMaj = "Statut : Publié";
    let estPublie = false;

    boutonToggleElem.addEventListener('click', () => {
        estPublie = !estPublie;
        if (estPublie) {
            statuElem.textContent = texteMaj;
            boutonToggleElem.textContent = "Revenir en brouillon";
        } else {
            statuElem.textContent = texteOrigine;
            boutonToggleElem.textContent = "Publier";
        }
    });
}