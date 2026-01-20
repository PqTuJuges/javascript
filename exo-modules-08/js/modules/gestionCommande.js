// Importer les données "commandes" depuis le module "donneesCommandes.js".
import { commandes } from "./donneesCommandes.js";

// Export nommé : permet d'importer cette fonction depuis un autre fichier.
export const calculerMontantTotal = () =>
{
    // Variable locale à la fonction.
    // Elle sert à cumuler le total au fil de la boucle.
    let montantTotal = 0;

    // Parcourir chaque commande du tableau.
    // Chaque "commande" est un objet qui contient les trois propriétés suivantes :
    // "article", "prix" et "quantite".
    for (const commande of commandes)
    {
        // Ajouter au total le prix de la commande (prix unitaire * quantité).
        montantTotal += (commande.prix * commande.quantite);
    }

    // Retourner le résultat final au code qui appelle la fonction.
    return montantTotal;
};
