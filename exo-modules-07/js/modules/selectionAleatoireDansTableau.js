const selectionnerElementAleatoireDansTableau = (tableau) => {
    const nbDecimal = Math.random();
    const indexDeci = nbDecimal * tableau.length;
    const arrondi = Math.floor(indexDeci);

    return tableau[arrondi];
}
export default { selectionnerElementAleatoireDansTableau };