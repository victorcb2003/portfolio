<?php

// On inclue la class book
include __DIR__."/../class/book.php";

$data = json_decode(file_get_contents('php://input'), true);

if ($data){

    // On change la valeur lu (1 pour lu et 0 pour non-lu)
    try {

        book::BookLu($data["book_id"],$data["lu"]);
        echo json_encode(['message'=>"\n".$data["book_id"]."\n".$data["lu"]]);

    } catch (Exception $e) {
        echo json_encode(["error" => $e]);
    }   
} else {
    echo json_encode(['message'=>"error"]);
}

?>