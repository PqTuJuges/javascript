// ─────────────────────────────────────────────
// Étape 5 – Import de la boîte à outils cookies
// ─────────────────────────────────────────────

import { ecrireCookie, lireCookie, supprimerCookie } from "./utilitairesCookies.js";

// ─────────────────────────────────────────────
// Étape 6 – Objet matchMedia créé une seule fois
// ─────────────────────────────────────────────

const mediaOS = window.matchMedia("(prefers-color-scheme: dark)");

// Variable de module : préférence courante (light | dark | system)
// Mise à jour à l'init ET à chaque changement de radio.
let preferenceCourante = "system";

// ─────────────────────────────────────────────
// Étape 5 – Fonction utilitaire centrale
// ─────────────────────────────────────────────

/**
 * Calcule le thème effectif à partir d'une préférence,
 * puis l'applique via data-theme sur <html>.
 *
 * @param {"light"|"dark"|"system"} preference
 */
function appliquerThemeEffectif(preference) {
    let themeEffectif;

    if (preference === "light") {
        themeEffectif = "light";
    } else if (preference === "dark") {
        themeEffectif = "dark";
    } else {
        // system : on délègue à l'OS
        themeEffectif = mediaOS.matches ? "dark" : "light";
    }

    document.documentElement.setAttribute("data-theme", themeEffectif);
    return themeEffectif; // utile pour construire le texte d'info
}

/**
 * Construit le texte affiché dans #theme-info.
 *
 * @param {"light"|"dark"|"system"} preference
 */
function texteInfo(preference) {
    if (preference === "light") return "Mode : clair";
    if (preference === "dark")  return "Mode : sombre";

    // system
    const osLabel = mediaOS.matches ? "OS sombre" : "OS clair";
    return `Mode : système (${osLabel})`;
}

// ─────────────────────────────────────────────
// Étape 5 – Initialisation
// ─────────────────────────────────────────────

export function initialiserTheme(selecteurs) {
    const radios       = document.querySelectorAll(selecteurs.radios);
    const themeInfoElem = document.querySelector(selecteurs.themeInfo);

    // Lire la préférence stockée ; null → considérée comme "system"
    const preferenceStockee = lireCookie("theme") ?? "system";
    preferenceCourante = preferenceStockee;

    // Cocher la radio correspondante
    radios.forEach((radio) => {
        if (radio.value === preferenceCourante) {
            radio.checked = true;
        }
    });

    // Appliquer le thème + mettre à jour le texte d'info
    appliquerThemeEffectif(preferenceCourante);
    themeInfoElem.textContent = texteInfo(preferenceCourante);

    // ── Étape 5 – Changement de radio ──────────────────────────
    radios.forEach((radio) => {
        radio.addEventListener("change", () => {
            preferenceCourante = radio.value; // mettre à jour la variable de module

            ecrireCookie("theme", preferenceCourante, 365);
            appliquerThemeEffectif(preferenceCourante);
            themeInfoElem.textContent = texteInfo(preferenceCourante);
        });
    });

    // ── Étape 6 – Suivi des changements OS ─────────────────────
    mediaOS.addEventListener("change", () => {
        // Ignorer si l'utilisateur a fait un choix explicite
        if (preferenceCourante !== "system") return;

        // Recalculer et appliquer à partir de la nouvelle valeur OS
        appliquerThemeEffectif("system");
        themeInfoElem.textContent = texteInfo("system");
    });
}