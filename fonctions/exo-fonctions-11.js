const appliquerOperationSurDeuxNombres = (a, b, operation) => {
  const resultat = operation(a, b);
  console.log(`Résultat de l'opération : ${resultat}`);
};

// Fonctions fléchées représentant différentes opérations
const addition = (a, b) => {
  return a + b;
};

const soustraction = (a, b) => {
  return a - b;
};

const moyenne = (a, b) => {
  return (a + b) / 2;
};

appliquerOperationSurDeuxNombres(10, 5, addition);
appliquerOperationSurDeuxNombres(10, 5, soustraction);
appliquerOperationSurDeuxNombres(10, 5, moyenne);
