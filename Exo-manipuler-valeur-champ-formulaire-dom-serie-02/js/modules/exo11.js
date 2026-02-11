export const execExo11 = () => {
    // 1. Affichage console
    console.log("----- Exo 11 -----");

    // 2 à 5. Sélections des éléments
    const caseElem = document.querySelector('#exo11-newsletter');
    const sortieElem = document.querySelector('#exo11-sortie');
    const boutonConsoleElem = document.querySelector('#exo11-btn-console');
    const boutonResetElem = document.querySelector('#exo11-btn-reset');

    
    if (!caseElem || !sortieElem || !boutonConsoleElem || !boutonResetElem) {
        console.warn("Erreur : Éléments introuvables dans le DOM pour l'Exo 11.");
        return;
    }

    const texteOrigine = sortieElem.textContent;

    caseElem.addEventListener('change', () => {
        if (caseElem.checked) {
            sortieElem.textContent = "Préférence : Activée";
        } else {
            sortieElem.textContent = "Préférence : Désactivée";
        }
    });

    // 9. Clic sur le bouton Console (Diagnostic)
    boutonConsoleElem.addEventListener('click', () => {
        console.log("État actuel (checked) :", caseElem.checked);
        console.log("État initial (defaultChecked) :", caseElem.defaultChecked);
    });

    // 10. Clic sur le bouton Reset
    boutonResetElem.addEventListener('click', () => {
        // On ne réinitialise QUE le texte de sortie comme demandé
        sortieElem.textContent = texteOrigine;
    });
};