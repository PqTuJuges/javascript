function afficherTirageDuLotto(quantiteDeNombres){
    resultatDuTirage =[];
    for(let i = 0;i < quantiteDeNombres; i++ ){
        let nombre = Math.floor(Math.random() * 49) + 1;    
        resultatDuTirage.push(nombre);
    }
    console.log("Voici le resultat :"+ resultatDuTirage)

}


// Appeler la fonction "afficherTirageDuLotto()".
afficherTirageDuLotto(10);