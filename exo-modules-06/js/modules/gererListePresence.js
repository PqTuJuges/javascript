const noms = [];
const ajouterNom = (nom) => {
    if(!noms.includes(nom)){
        noms.push(nom);
    }
}


const supprimerNom = (nom) =>{
    const zzzz = noms.indexOf(nom);
    if(zzzz !== -1){
        noms.splice(zzzz,1);
    }
}

const afficherNoms = () => {
    if(noms.length === 0){
        return "aucun nom dans la liste";
    }
    return noms.join(" , ");
}

export { ajouterNom , supprimerNom , afficherNoms };