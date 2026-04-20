export const ecrireCookie = (nom, valeur, jours) => {
    const maxAge = jours * 24 * 60 * 60;
    const chaineCookie = `${nom}=${valeur}; Max-Age=${maxAge}; path=/; SameSite=Lax`
    document.cookie = chaineCookie;
}
export const lireCookie = (nom) => {
    if (document.cookie.length === 0) {
        return null;
    }
    const chaineComplete = document.cookie;
    if (chaineComplete.length === 0) {
        return null;
    }
    const pairs = chaineComplete.split("; ");
    for (let i = 0; i < pairs.length; i++) {
        const nomCookie = pairs[i].split("=")[0];
        const valeurCookie = pairs[i].split("=")[1];
        if (nomCookie === nom) {
            return valeurCookie;
        }
    } return null;
}
export const supprimerCookie = (nom) => {
    const chaineCookie = `${nom}=; max-age=0; path=/`
    document.cookie = chaineCookie;
}

