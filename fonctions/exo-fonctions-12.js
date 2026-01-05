// exo-fonctions-12.js

// Tableau de tâches
const taches = [
  'Envoyer le mail au client',
  'Relancer le fournisseur',
  'Préparer le rapport mensuel'
];

// Fonction utilitaire qui applique une action à chaque tâche
const pourChaqueTache = (listeTaches, action) => {
  for (let i = 0; i < listeTaches.length; i++) {
    const tache = listeTaches[i];
    action(tache, i);
  }
};

// Callback 1 : afficher chaque tâche avec son index
const afficherTacheAvecIndex = (tache, index) => {
  console.log(`${index} - ${tache}`);
};

// Utilisation de la première callback
pourChaqueTache(taches, afficherTacheAvecIndex);

// Callback 2 : afficher uniquement les tâches longues
const afficherTacheSiLongue = (tache, index) => {
  if (tache.length > 20) {
    console.log(`${index} - ${tache}`);
  }
};

// Utilisation de la deuxième callback
pourChaqueTache(taches, afficherTacheSiLongue);
