<?php

include "./partial/header.php";
include "./class/database.php"

?>

<head>
    <script defer src="./scripts/book.js"></script>
</head>


<h1>Livres</h1>

<!-- Inputs pour la recherche de livre dans l'api -->
<div class="input">
    <input type="text" placeholder="Nom d'un livre" id="recherche">
    <input type="number" placeholder="Nombre de résultat" id="nbrResult" min="0" max="40">
    <select name="drlt" id="drlt">
        <option value="">Tous genre</option>
    </select>
    <input type="submit" id="submit">
</div>
<div class="resultats">

</div>

<?php include "./partial/footer.php" ?>