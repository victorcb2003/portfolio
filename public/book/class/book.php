<?php

include "database.php";

class book
{
    public $book_id;
    public $user_id;
    public $img;
    public $titre;
    public $auteur;

    public function __construct($book_id, $img, $titre, $auteur){

        $this->book_id = $book_id;
        $this->user_id = $_SESSION["id"];
        $this->img = $img;
        $this->titre = $titre;
        $this->auteur = $auteur;

    }

    // Fontion qui verifie si un user a deja le livre qu'il veut ajouter a sa bibliothèque
    public function verifBookUser_id()
    {
        $DB = new DB();
        $dns = $DB->connect();

        try {
            // On verifi si la requête revoie un tableau vide
            if (empty($dns->query('SELECT id FROM LIBRARY WHERE USER_ID ="' . $this->user_id . '" AND BOOK_ID = "' . $this->book_id . '";')->fetch())) {
                return true;
            } else {
                return false;
            }
        } catch (Exception $e) {
            echo "erreur db", $e->getMessage();
        }
    }

    //  Insertion du book dans la DB
    public function database()
    {
        $DB = new DB();
        $dns = $DB->connect();
        $lu = 0;

        try {
            $sth = $dns->exec('USE book;INSERT INTO LIBRARY(BOOK_ID,USER_ID,IMAGE,TITRE,AUTEUR,LU) VALUES("' . $this->book_id . '",' . $this->user_id . ',"' . $this->img . '","' . $this->titre . '","' . $this->auteur . '",' . $lu . ');');
        } catch (Exception $e) {
            echo "erreur db", $e->getMessage();
        }
    }

    //  Récupération des livre a partir du user_id dans la DB
    public static function getBook($id)
    {
        $DB = new DB();
        $dns = $DB->connect();

        try {
            $data = $dns->query('SELECT IMAGE, TITRE, AUTEUR, BOOK_ID, LU FROM LIBRARY WHERE USER_ID ="' . $id . '";')->fetchall();
            return $data;
        } catch (Exception $e) {
            echo "erreur db", $e->getMessage();
        }
    }

    //  On change la valeur lu d'un book dans la DB
    public static function BookLu($book_id, $lu)
    {
        $DB = new DB();
        $dns = $DB->connect();

        try {
            $sth = $dns->exec('USE book; UPDATE LIBRARY SET LU = ' . $lu . ' WHERE BOOK_ID = "' . $book_id . '";');
        } catch (Exception $e) {
            echo "erreur db", $e->getMessage();
        }
    }

    // On va supprimer un book grace a son id et l'id du user

    public static function BookSup($book_id,$user_id){
        
        $DB = new DB();
        $dns = $DB->connect();

        try {
            $sth = $dns->exec('USE book; DELETE FROM LIBRARY WHERE BOOK_ID = "'.$book_id.'" AND USER_ID = '.$user_id.';');
        } catch (Exception $e) {
            echo "erreur db", $e->getMessage();
        }
    }
}
