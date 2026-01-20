// Données du plan de salle sous forme de tableau à deux dimensions (tableau de tableaux).
//
// - Le premier index correspond à la rangée.
// - Le second index correspond à la colonne.
// - Une chaîne vide "" représente une place libre.
// - Un nom représente une place occupée.
//
// Exemple de lecture :
// planSalle[0][1] → rangée 0, colonne 1 → "Dupont"
/*
             colonne 0        colonne 1        colonne 2

rangée 0    ["Lambert",       "Dupont",        ""        ],
rangée 1    ["El Amrani",     ""       ,       "Nguyen"  ],
rangée 2    [""              , "Martin",       "Diallo"  ]
*/
export const planSalle = [
    ["Lambert", "Dupont", ""],
    ["El Amrani", "", "Nguyen"],
    ["", "Martin", "Diallo"],
];