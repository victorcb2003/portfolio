<?php

// On inclue la class book
include __DIR__."/../class/book.php";

session_start();

$data = json_decode(file_get_contents('php://input'), true);

if ($data){
    
    // On supprime un book avec son id et l'id du user associés connecté
    try {

        book::BookSup($data["book_id"],$_SESSION["id"]);
        echo json_encode(['message'=> "success"]);

    } catch (Exception $e) {
        echo json_encode(["error" => $e]);
    }   
} else {
    echo json_encode(['message'=>"error"]);
}

?>