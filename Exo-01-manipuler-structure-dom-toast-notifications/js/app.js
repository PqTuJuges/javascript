import { initialiserGestionnaireToasts } from "./modules/gestionnaireToasts.js";
import { afficherToast } from "./modules/gestionnaireToasts.js";
initialiserGestionnaireToasts("#toasts-conteneur");

const boutonsConteneurElem = document.getElementById("boutons-conteneur");
const gererClicBtn = (e) => {
    const btnElem = e.target.closest("button");
    if(!btnElem){
        return;
    }
   const type = btnElem.dataset.type;
   let message = "";
    if(type === "succes"){
        message = "Action réussie.";
    } else if(type === "erreur"){
        message = "Une erreur est survenue.";
    } else if(type === "info"){
        message = "Information.";
    }
    afficherToast(type, message);
}
boutonsConteneurElem.addEventListener('click', gererClicBtn);