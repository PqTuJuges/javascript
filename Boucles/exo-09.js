const utilisateurs = ["alice", "bob", "chris"];

for (const element of utilisateurs) {
    console.log("Bienvenue ,",element);
}
// ajt
utilisateurs.push("Mathias");

console.log("Liste des inscrits mise à jour");

//maj 
for (const element of utilisateurs) {
    console.log(element);
}