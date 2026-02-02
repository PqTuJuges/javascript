export const execExo02 = () =>{
    console.log("----- Exo 02 -----");
    const zoneSourisElem = document.getElementById('zone-souris')
    const mouvementSouris = (event) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log(`"Position X: ${x}, Position Y : ${y}`);
    };
    zoneSourisElem.addEventListener('mousemove', mouvementSouris);
}