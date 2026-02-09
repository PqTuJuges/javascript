export const execExo07 = () => {
    console.log(" ----- Exo 07 -----")
    const champNomElem = document.querySelector('#exo07-nom');
    const sortieElem = document.querySelector('#exo07-sortie');

    if (!champNomElem || !sortieElem) {
        console.log("element manquant")
        return;
    }
    champNomElem.addEventListener('change', () => {
        const valeurBrute = champNomElem.value;
        console.log(JSON.stringify(valeurBrute));

        let valeurNettoyee = valeurBrute.trim();
        if (valeurNettoyee === "") {
            valeurNettoyee = "(vide)";
        }
        sortieElem.textContent = "Nom affiché : " + valeurNettoyee;
    });
}
