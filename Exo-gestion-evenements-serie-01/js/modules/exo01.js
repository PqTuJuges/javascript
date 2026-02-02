export const execExo01 = () =>{
    console.log("----- Exo 01 -----");
    const boutonClicElem = document.getElementById('btn-clic');
    const gerebouton = () => {
        console.log("Clic détecté !");
    };
    boutonClicElem.addEventListener('click', gerebouton);
}