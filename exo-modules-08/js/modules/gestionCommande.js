import { commandes } from "./donneesCommandes.js";
const caclulerMontantTotal = () => {
    let total = 0;
    commandes.forEach(commande => {
        total += commande.prix * commande.quantite;
    });
    return total;
}
export { caclulerMontantTotal };