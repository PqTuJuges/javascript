<?php
/*
    NOTE (cours JavaScript) :
    Cette partie PHP sert uniquement à simuler le contexte SSR.

    - Le serveur génère le HTML.
    - Le serveur peut lire un cookie "theme".
    - Le serveur applique un thème dans l'attribut data-theme dès le HTML initial (réduction du "flash").

    Aucun objectif PHP : ne pas "apprendre PHP" ici.
*/

$theme = $_COOKIE["theme"] ?? "system";

/*
    PHP ne peut pas connaître prefers-color-scheme (préférence OS).
    Si le cookie vaut "system" (ou est absent), appliquer un fallback SSR :
    - Ici : "light"
    Un mini script dans le <head> ajustera vers "dark" si l'OS préfère le sombre.
*/
$themeAttr = ($theme === "light" || $theme === "dark") ? $theme : "light";
?>

<!DOCTYPE html>
<html lang="fr" data-theme="<?= htmlspecialchars($themeAttr, ENT_QUOTES) ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>JS : Thème clair / sombre (SSR)</title>

    <!--
        Mini script anti-flash :
        - Objectif : si le cookie vaut "system" (ou absent), appliquer le thème effectif (light/dark) avant affichage.
        - Contrainte : pas de regex.
        - Important : réutiliser la logique de la boîte à outils cookies (lireCookie),
        car les modules ES importés plus bas ne sont pas disponibles à cet instant.
    -->
    <script>
        (function () {
            // TODO :
            // Récupérer la valeur du cookie "theme" sans regex (copier la logique de lireCookie).
            // Si valeur "system" ou null : détecter prefers-color-scheme.
            // Poser data-theme sur document.documentElement avec "light" ou "dark".
        })();
    </script>
</head>

<body>
    <main>
        <h1>Thème clair / sombre</h1>

        <section class="panneau">
            <h2>Choisir un thème</h2>

            <fieldset class="choix-theme">
                <legend>Mode</legend>

                <label>
                    <input type="radio" name="theme" value="light" id="theme-light">
                    Clair
                </label>

                <label>
                    <input type="radio" name="theme" value="dark" id="theme-dark">
                    Sombre
                </label>

                <label>
                    <input type="radio" name="theme" value="system" id="theme-system">
                    Système
                </label>
            </fieldset>

            <p id="theme-info" class="info"></p>

            <!-- Zone d'annonce (ARIA) : mise à jour en JS à la dernière étape -->
            <p id="theme-live" class="sr-only" aria-live="polite"></p>
        </section>

        <section class="panneau">
            <h2>Aperçu</h2>
            <p>
                Ce bloc sert à vérifier les contrastes et le changement de thème.
                L'objectif : changer le thème en ne pilotant qu'un seul attribut sur la balise html.
            </p>

            <div class="cartes">
                <article class="carte">
                    <h3>Carte A</h3>
                    <p>Texte de démonstration.</p>
                    <button class="btn">Action</button>
                </article>

                <article class="carte">
                    <h3>Carte B</h3>
                    <p>Texte de démonstration.</p>
                    <button class="btn">Action</button>
                </article>
            </div>
        </section>
    </main>

    <script src="./js/app.js" type="module"></script>
</body>
</html>