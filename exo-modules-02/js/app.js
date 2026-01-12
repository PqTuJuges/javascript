import { estMajeur } from "./modules/verifierMajorite.js"; 

const age = 18;
if(estMajeur(age) === true){
    console.log(`Vous avez ${age} an(s), vous êtes donc majeur`);
}else{
    console.log(`Vous avez ${age} ans(s), vous êtes donc mineur !`)
}

