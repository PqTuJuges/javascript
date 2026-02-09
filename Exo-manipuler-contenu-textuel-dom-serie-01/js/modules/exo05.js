export const execExo05 = () => {
    console.log("----- Exo 05 -----");
    const etatElem = document.querySelector("#exo05-etat");
    const majElem = document.querySelector("#exo05-maj");
    const boutonSwitchElem = document.querySelector("#exo05-btn-switch");
    const boutonRefreshElem = document.querySelector("#exo05-btn-refresh");
    const carteElem = document.querySelector("#exo05-carte");

    if(!etatElem || !majElem || !boutonSwitchElem || !boutonRefreshElem || !carteElem){
        console.log("elements manquant")
        return;
    }
    const etatDispo = "En stock";
    const etatIndispo = "Rupture";
    
    boutonSwitchElem.addEventListener('click', () => {
        if(etatElem.textContent === etatDispo){
            etatElem.textContent = etatIndispo;
        }else{
            etatElem.textContent = etatDispo;
        }
        majElem.textContent = new Date();
    })

    const texteRefreshOrigine = boutonRefreshElem.textContent;
    boutonRefreshElem.addEventListener('click', () => {
        const heure = new Date();
        majElem.textContent = heure;
        boutonRefreshElem.textContent =`${texteRefreshOrigine} (fait à ${heure})`;
    })
}
