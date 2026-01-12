import { formaterMessage } from "./formaterMessage.js"
const demarrerConnexion = () => {
    const texte = "Connexion réussie";
    const texteFormater = formaterMessage(texte);

    return texteFormater;
}
export {demarrerConnexion};