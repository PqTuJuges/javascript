const pokemonPopulaires = [
    "Pikachu",
    "Greninja",
    "Lucario",
    "Mimikyu",
    "Charizard",
    "Umbreon",
    "Sylveon",
    "Garchomp",
    "Rayquaza",
    "Gengar",
];
const selectionnerPokemonAuHasard = () => {
    const nbRandom = Math.random();
    const indexDecimal = nbRandom * pokemonPopulaires.length;
    const nbArrondi = Math.floor(indexDecimal);

    return pokemonPopulaires[nbArrondi];
}
export { selectionnerPokemonAuHasard };