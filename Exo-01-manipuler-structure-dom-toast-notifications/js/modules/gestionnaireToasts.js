let conteneurToastsElem = null;
let annonceurElem = null;

export const initialiserGestionnaireToasts = (selecteurCssConteneurToasts) => {
    conteneurToastsElem = document.querySelector(selecteurCssConteneurToasts);
    
    if (!conteneurToastsElem) {
        console.warn(" Gestionnaire de toasts non initialisé : conteneur HTML des toast introuvable");
        return;
    }

    annonceurElem = document.createElement("div");
    annonceurElem.setAttribute("aria-live", "polite");
    annonceurElem.setAttribute("aria-atomic", "true");
    annonceurElem.style.position = "absolute";
    annonceurElem.style.left = "-10000px";
    annonceurElem.style.width = "1px";
    document.body.append(annonceurElem);
    
    conteneurToastsElem.addEventListener("click", supprimerToast);

    console.log("Gestionnaire de toasts initialisé avec succès");
    
};

const creerToast = (type, message) => {
    const divToast = document.createElement("div");
    divToast.classList.add("toast", `toast-${type}`, "js-toasts");

    const spanIcone = document.createElement("span");
    spanIcone.classList.add("toast-icone");
    
    if (type === "succes") {
        spanIcone.textContent = "✓";
    } else if (type === "erreur") {
        spanIcone.textContent = "✗";
    } else if (type === "info") {
        spanIcone.textContent = "ℹ";
    }

    const spanMessage = document.createElement("span");
    spanMessage.classList.add("toast-message");

    spanMessage.textContent = message;
    
    const btnFermer = document.createElement("button");
    btnFermer.classList.add("toast-fermer" , "js-toasts-fermer");
    btnFermer.setAttribute("aria-label", "Fermer la notification");

    btnFermer.textContent = "×";
    divToast.append(spanIcone, spanMessage, btnFermer);
    return divToast;
};

export const afficherToast = (type, message) => {

    const nouveauToast = creerToast(type,message);
    conteneurToastsElem.prepend(nouveauToast);
}
const supprimerToast = (event) => {
    const btnDeFermeture = event.target.closest(".toast-fermer");
    if (btnDeFermeture === null) {
        return;
    }
    const toastFermer = btnDeFermeture.closest(".js-toasts");
    if( toastFermer === null){
        return;
    }
    toastFermer.remove();
}   