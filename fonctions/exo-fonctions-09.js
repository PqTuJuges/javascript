const calculerPrixTTC = (prixHT, tauxTVA) => {
  const montantTVA = prixHT * (tauxTVA / 100);
  const prixTTC = prixHT + montantTVA;
  return prixTTC;
};

const calculerTotalLigne = (prixUnitaireHT, quantite, tauxTVA) => {
  const prixUnitaireTTC = calculerPrixTTC(prixUnitaireHT, tauxTVA);
  const totalLigne = prixUnitaireTTC * quantite;
  return totalLigne;
};

// Test du calcul avec des valeurs d'exemple
const totalCommande = calculerTotalLigne(100, 3, 21);

// Affichage du résultat
console.log(totalCommande);
