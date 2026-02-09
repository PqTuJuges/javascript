export const execExo04 = () => {
    console.log("----- Exo 04 -----");
    const carteElem = document.querySelector("#exo04-carte");
    const etatElem = document.querySelector("#exo04-etat");
    const majElem = document.querySelector("#exo04-maj");
    const boutonSwitchElem = document.querySelector("#exo04-btn-switch");
    const boutonRefreshElem = document.querySelector("#exo04-btn-refresh");
    const boutonResetElem = document.querySelector("#exo04-btn-reset");

    if (!carteElem || !etatElem || !majElem || !boutonRefreshElem || !boutonSwitchElem || !boutonResetElem) {
        console.log("elements manquant")
        return;
    }
    const carteHtmlOrigine = carteElem.innerHTML;
    const stock = "En stock";
    const rupture = "Rupture";
    const initialDate = "Aucune date";

    const changement = () => {
        if (etatElem.textContent === stock) {
            etatElem.textContent = rupture;
        } else {
            etatElem.textContent = stock;
        }
        majElem.textContent = new Date();
    }
    boutonSwitchElem.addEventListener('click', changement)
    boutonRefreshElem.addEventListener('click', () => {
        carteElem.innerHTML = `
      <p>Produit : <strong>Clavier mécanique</strong></p>
      <p>Disponibilité : <span id="exo04-etat">${etatElem.textContent}</span></p>
      <p>Dernière mise à jour : <span id="exo04-maj">${majElem.textContent}</span></p>
      <button id="exo04-btn-switch">Basculer disponibilité</button>
    `;
    })
    boutonResetElem.addEventListener('click', () => {
        
        carteElem.innerHTML = carteHtmlOrigine;
        boutonSwitchElem.addEventListener('click', changement)
        majElem.textContent = initialDate;
    })
}
