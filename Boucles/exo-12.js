const panier = [
    { nom: "Clavier", qte: 1, prix: 40 },
    { nom: "Souris",  qte: 2, prix: 15 },
    { nom: "Tapis",   qte: 1, prix: 10 }
];

let total = 0;

for (const element of panier) {
    //calcule sous total
    let soustotal = element.qte*element.prix;

    console.log(element.nom + " : " + soustotal + " € ");

    total += soustotal;
}
console.log("Total du panier " + total+ "€");