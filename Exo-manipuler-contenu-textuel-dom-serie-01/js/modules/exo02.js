export const execExo02 = () => {
    console.log("----- Exo 02 -----");
    const texteElem = document.querySelector('#exo02-texte');
    const sortieElem = document.querySelector('#exo02-sortie');
    const boutonToggleElem = document.querySelector('#exo02-btn-toggle');

    if(!texteElem || !sortieElem ||!boutonToggleElem){
        console.log("élément manque");
        return;
    }
    const texteVide = "(vide)";
    let sortieEstVisible = false;
    boutonToggleElem.addEventListener('click', () =>{
        sortieEstVisible = !sortieEstVisible;
        if(sortieEstVisible){
            sortieElem.textContent = texteElem.innerText;
            boutonToggleElem.textContent = "Effacer le résumé";
        }else{
            sortieElem.textContent = texteVide;
            boutonToggleElem.textContent = "Générer le résumé visible";
        }
    })
}