export const execExo06 = () => {
    console.log("----- Exo 06 -----");
    const boutonTestElem = document.getElementById('btn-test');
    const boutonActiverElem = document.getElementById('btn-activer');
    const boutonDesactiverElem = document.getElementById('btn-desactiver');
    let ecouteurBoutonTestEstActif = false;
    const gestionClicBoutonTest = () => {
        console.log("Le bouton Test est actif !");
    };
    boutonActiverElem.addEventListener('click', () => {
        if(ecouteurBoutonTestEstActif){
            console.log("tj actif");
        }else{
            boutonTestElem.addEventListener('click',gestionClicBoutonTest);
            ecouteurBoutonTestEstActif = true;
            console.log("mtn actif");
        }
    });
    boutonDesactiverElem.addEventListener('click', () => {
        if(!ecouteurBoutonTestEstActif){
            console.log("inactif");
        }else{
            boutonTestElem.removeEventListener('click',gestionClicBoutonTest);
            ecouteurBoutonTestEstActif = false;
            console.log("mtn inactif")
        }
    })
}
