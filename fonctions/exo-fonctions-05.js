function afficherTirageDuLotto(quantiteDeNombres,valeurMin,valeurMax){
    resultatDuTirage =[];
    for(let i = 0;i < quantiteDeNombres; i++ ){
        
        let nombre = Math.floor(Math.random() * (valeurMax-valeurMin) + valeurMin);    
        resultatDuTirage.push(nombre);
    }
    console.log("Voici le resultat :"+ resultatDuTirage)

}


// Appeler la fonction "afficherTirageDuLotto()".
afficherTirageDuLotto(10,1,20);