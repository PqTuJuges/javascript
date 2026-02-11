export const execExo10 = () => {
    console.log(" ----- Exo 10 -----");
    const selectElem = document.querySelector('#exo10-pays');
    const sortieElem = document.querySelector('#exo10-sortie');
    const boutonInexistantElem = document.querySelector('#exo10-btn-inexistant');
    const boutonResetElem = document.querySelector('#exo10-btn-reset');

    if(!selectElem || !sortieElem || !boutonInexistantElem || !boutonResetElem){
        console.log("elements manquants")
        return;
    }
    const mettreAJourSortie = () => {
        if(selectElem === -1){
            sortieElem.textContent("Sélection : (aucune option sélectionnée)");
        }else{
            sortieElem.textContent("Sélection : " + selectElem.value + " (" + selectElem.selectedOptions[0].text + ")");
        }
    }
    selectElem.addEventListener('change' , () => {
        mettreAJourSortie();
    })
    boutonInexistantElem.addEventListener('click' , () =>{
        selectElem.value = "xx";
        mettreAJourSortie();
    })
    boutonResetElem.addEventListener('click' , () =>{
        selectElem.value = "be";
        mettreAJourSortie();
    })
    mettreAJourSortie();
}