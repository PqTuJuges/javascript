export const execExo06 = () => {
    console.log("----- Exo 06 -----");
    const zoneElem = document.querySelector('#exo06-zone');
    const btnContent = document.querySelector('#exo06-btn-textcontent');
    const btnInner = document.querySelector('#exo06-btn-innerhtml');
    const btnReset = document.querySelector('#exo06-btn-reset');


    if (!zoneElem || !btnContent || !btnInner || !btnReset){
        console.log("elements manquants")
        return;
    }
    const noteUtilisateur = `<img src="x" onerror="alert('Attaque XSS')">`;
    const texteRetour = "(Aucune note pour le moment)";

    btnContent.addEventListener('click' , () => {
        zoneElem.textContent = noteUtilisateur;
    })

    btnInner.addEventListener('click' , () => {
        zoneElem.innerHTML = noteUtilisateur;
    })

    btnReset.addEventListener('click', () => {
        zoneElem.textContent = texteRetour;
    })
}
