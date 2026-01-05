const executerSiConnecte = (estConnecte, actionLorsqueConnecte) => {
  if (estConnecte === true) {
    actionLorsqueConnecte();
  } else {
    console.log("Accès refusé, merci de vous connecter.");
  }
};

// Cas : utilisateur connecté
executerSiConnecte(true, () => {
  console.log("Ouverture du tableau de bord...");
});

// Cas : utilisateur non connecté
executerSiConnecte(false, () => {
  console.log("Ouverture du tableau de bord...");
});
