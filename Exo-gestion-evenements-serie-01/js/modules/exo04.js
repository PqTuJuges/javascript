export const execExo04 = () => {
    console.log("----- Exo 04 -----");
    const lienInterditElem = document.getElementById('lien-interdit');
    const lesliensinterdit = (event) => {
        event.preventDefault();
        console.log( "Navigation bloquée par JavaScript !");
    };
    lienInterditElem.addEventListener('click', lesliensinterdit);
}