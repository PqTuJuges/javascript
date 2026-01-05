let age;
do {
    let saisie = prompt("Entrez votre âge : ");
    age = Number(saisie);
} while (isNaN(age) || age <= 0);
console.log("Age :", age);