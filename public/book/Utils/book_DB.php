<?php

// On inclue la class book
include __DIR__."/../class/book.php";

$data = json_decode(file_get_contents('php://input'), true);
session_start();

if ($data) {
    // On envoie le book en DB et on renvoie une erreur si il y est dejà
    try {

        $book = new book($data["id"],$data["img"],$data["titre"],$data["auteur"]);

        if ($book->verifBookUser_id()){

            $book->database();
            echo json_encode(["message" => "success"]);

        } else {

            echo json_encode(["message" => "Book deja en DB"]);

        }
    } catch (Exception $e) {
        echo json_encode(["error" => $e]);
    }
} else {
    echo json_encode(['message' => 'Aucune donnée reçue']);
}


?>