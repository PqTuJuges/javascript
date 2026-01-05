const titreCarte = "Confirmer mon inscription en ligne";
let nbVoyelles = 0;
let nbAutres = 0;
const voyelles = "aeiouyAEIOUY";

for (const element of titreCarte) {
    if(element==" "){
        continue;
    }
    if(voyelles.includes(element)){
        nbVoyelles+= 1;
    }
    else{
        nbAutres+= 1;
    }
    
}
console.log("voyaelles : " + nbVoyelles)
console.log("autres : " + nbAutres)