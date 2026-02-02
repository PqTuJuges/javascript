export const execExo03 = () => {
    console.log("----- Exo 03 -----");
    const champClavierElem = document.getElementById('champ-clavier');
    const clavier = (event) => {
        console.log("Touche pressée : " + event.key);
    };
    champClavierElem.addEventListener('keydown' ,clavier );
}