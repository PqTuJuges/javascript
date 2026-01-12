import * as mots from "./donnees.js"
import choisirMotAleatoire from "./selectionAleatoireDansTableau.js"


function genererSuperHeros() {
    
    const ajdectif = mots.obtenirAdjectifs();
    const animaux = mots.obtenirAnimaux();
    const pouvoir = mots.obtenirPouvoirs();
    
    
    const aleatoireAjdectif = choisirMotAleatoire.selectionnerElementAleatoireDansTableau(ajdectif)
    const aleatoireAnimaux = choisirMotAleatoire.selectionnerElementAleatoireDansTableau(animaux);
    const aleatoirePouvoir = choisirMotAleatoire.selectionnerElementAleatoireDansTableau(pouvoir);
    
    const formater = `${aleatoireAjdectif}  ${aleatoireAnimaux}  avec  ${aleatoirePouvoir}.`
    return formater
}
export { genererSuperHeros };
