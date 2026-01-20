export const execExo12 = () => {
    console.log("----- Exo 12 -----");
    /* [ ] permet de selectioner que les attributs */
    const champsRequiredElements = document.querySelectorAll('[required]');
    console.log(champsRequiredElements);
    console.log(champsRequiredElements.length);
}