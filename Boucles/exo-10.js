const data = {
    nom: "Alice",
    email: "",
    age: 22
};

for (const key in data) {

    const element = data[key];

    //Verif les champs pas complet
    if (element === "" || element === null || element === undefined) {

        console.log("Le champ '" + key + "'est pas rempli");
    }
}