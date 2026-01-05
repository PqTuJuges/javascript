const params = {
    page: 2,
    limit: 10,
    tri: "desc"
};

let morceaux = [];
for (const key in params){
    //recup valeur
    const element = params[key];
    //ajt cle = valeur
    const chaine = key + "=" + element;
    //ajt au tableau vide 
    morceaux.push(chaine);
}

const resultat = morceaux.join("&");
console.log(resultat);
