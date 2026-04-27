<?php

    session_start();
    if ($_SESSION["id"] != "" && $_SESSION["id"] != null) :

    ?>

        <!-- création d'un button là ou on inclue deconnexion.php -->
        <button class="deco">Déconnexion</button>

        <script>

            let button = document.querySelector(".deco")
            let body = document.querySelector("#deco")

            button.addEventListener("click", () => {

                //  On appelle deconnexion pour faire $_SESSION = null et on redirige l'utilisateur vers Login.php
                fetch("./Utils/session_stop.php")
                body.removeChild(button)
                window.location.href = 'Login.php'

            })

        </script>

<?php endif ;?>