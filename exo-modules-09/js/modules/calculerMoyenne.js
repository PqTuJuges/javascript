export const calculerMoyenne = (valeurs) =>
{
    // "valeurs" est supposé être un tableau contenant uniquement des nombres.

    // La méthode reduce() permet de parcourir le tableau et de cumuler une valeur.
    // - "accumulateur" contient le résultat intermédiaire du calcul.
    // - "valeur" correspond à l'élément courant du tableau.
    // - Le 0 final est la valeur de départ de l'accumulateur.
    //
    // Ici, reduce() additionne tous les nombres du tableau pour obtenir la somme totale.
    const somme = valeurs.reduce(
        (accumulateur, valeur) => accumulateur + valeur,
        0
    );

    // La moyenne correspond à la somme des valeurs divisée par le nombre d'éléments.
    return somme / valeurs.length;

    // Remarque :
    // Si le tableau est vide, valeurs.length vaut 0 et le résultat sera NaN.
    // Dans ce contexte pédagogique, on suppose que le tableau contient au moins une valeur.
};