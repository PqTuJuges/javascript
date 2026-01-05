function genererMessageStatutServeur(messageStatut){
    const estEnMaintenance = true;
    if(estEnMaintenance){
        return "Le serveur est en maintenance"
    }else{
        return "ok"
    }
}
genererMessageStatutServeur(messageStatut);
console.log(messageStatut);