// Données du planning sous forme de tableau à deux dimensions (tableau de tableaux).
//
// - Le premier index correspond au jour (ligne).
// - Le second index correspond au créneau horaire (colonne).
// - Une chaîne vide "" signifie qu'aucun cours n'est prévu à ce moment.
// - Une valeur comme "JS", "HTML", "PHP", etc. est un code de cours.
//
// Exemple de lecture :
// planning[0][1] → jour 0 (lundi), créneau 1 (midi) → "HTML"
/*
                  créneau 0        créneau 1        créneau 2
                  (matin)          (midi)           (soir)

jour 0 (lundi)     ["JS",            "HTML",          "NET" ],
jour 1 (mardi)     ["PHP",           "JS",            ""    ],
jour 2 (mercredi)  ["",              "UX",            "PHP" ]
*/
const planning = [
    ["JS", "HTML", "NET"],
    ["PHP", "JS", ""],
    ["", "UX", "PHP"],
];

// Dictionnaire de correspondance entre un code de cours et son libellé complet.
// Permet de transformer une valeur du tableau planning comme "JS" en "JavaScript".
const libellesParCode = {
    JS: "JavaScript",
    HTML: "HTML",
    PHP: "PHP",
    UX: "UX design",
    NET: "Reseaux",
};

// Correspondance entre l'index de rangée du planning et le nom du jour.
// Exemple :
// planning[0] → "lundi"
const joursParIndex = [
    "lundi",
    "mardi",
    "mercredi",
    "jeudi",
    "vendredi"
];

// Correspondance entre l'index de colonne du planning et le créneau horaire.
// Exemple :
// planning[r][2] → "soir"
const creneauxParIndex = [
    "matin",
    "midi",
    "soir"
];

// Exports nommés :
// ces données peuvent être utilisées par d'autres modules
// pour construire des messages, générer un planning lisible, etc.
export { planning, libellesParCode, joursParIndex, creneauxParIndex };
