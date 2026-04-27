<?php

// On inclue la class book
include __DIR__."/../class/book.php";

session_start();

// On récupère les book associés a l'id de l'utilisateur connecté
$data = book::getBook($_SESSION["id"]);

echo json_encode([
    "data" => $data
]);

?>