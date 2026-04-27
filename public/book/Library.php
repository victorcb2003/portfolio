<?php

include "partial/header.php"



?>


<h1>Bibliothèque</h1>


<?php

    session_start();

    // On affiche la librairie du user uniquement si il est connecté 
    if ($_SESSION["id"] == "" || $_SESSION["id"] == null):

?>

    <h2>Vous devez vous connecter pour acceder a votre bibliothèque</h2>

<?php else : ?>

    <head>
        <script defer src="./scripts/library.js"></script>
    </head>

    <div class="resultats">    </div>

<?php endif ?>


<?php include "./partial/footer.php"; ?>