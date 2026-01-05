function afficherTirageDuLotto(){
    resultatDuTirage =[];
    for(let i = 0;i < 7; i++ ){
        let nombre = Math.floor(Math.random() * 45) + 1;    
        resultatDuTirage.push(nombre);
    }
    console.log("Voici le resultat :"+ resultatDuTirage)

}
// Appeler la fonction "afficherTirageDuLotto()".
afficherTirageDuLotto();