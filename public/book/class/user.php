<?php

include "database.php";
class user{
    public $name;
    public $password;
    public $email;

    public function __construct($name,$password,$email = null) {

        $this->name = $name;
        $this->password = $password;
        $this->email = $email;

    }


//  On verifie que le username n'est pas deja utiliser
    public static function verifUser($username){

        $DB = new DB();
        $dns = $DB->connect();

        try {
            // On verifie si le tableau retourner est vide
            if (empty($dns->query('SELECT id FROM USER WHERE USERNAME ="'.$username.'";')->fetch())) {
                return true;
            } else {
                return false;
            }
        }
        catch (Exception $e){
            echo "erreur db",$e->getMessage();
        }
    }

// On verifie que l'email n'est pas deja pris
public static function verifEmail($email){

    $DB = new DB();
    $dns = $DB->connect();

    try {
        // On verifie si le tableau retourner est vide
        if (empty($dns->query('SELECT id FROM USER WHERE email ="'.$email.'";')->fetch())) {
            return true;
        } else {
            return false;
        }
    }
    catch (Exception $e){
        echo "erreur db",$e->getMessage();
    }
}

// Récupération de l'id du user grace a son nom

    public function id(){

        $DB = new DB();
        $dns = $DB->connect();

        try {
            return $dns->query('SELECT id FROM USER WHERE USERNAME ="'.$this->name.'";')->fetch()["id"];
        }
        catch (Exception $e){
            echo "erreur db",$e->getMessage();
        }
    }
    

// Récupération du hash du password avec le name

    public function Connection(){

        $DB = new DB();
        $dns = $DB->connect();

        try {
            $pwd = $dns->query('SELECT PASSWORD FROM USER WHERE USERNAME ="'.$this->name.'";')->fetch()["PASSWORD"];

            //On verifie si le hass correspond au password donnée
            if (password_verify($this->password,$pwd)){
                return true;
            } else {
                return false;
            }
        }
        catch (Exception $e){
            echo "erreur db",$e->getMessage();
        }
    }

//  Insertion du user dans la DB
    public function database(){

        $DB = new DB();
        $dns = $DB->connect();

        try{
            $sth = $dns->exec('USE book;INSERT INTO USER(USERNAME,PASSWORD,email) VALUES("'.$this->name.'","'.$this->password.'","'.$this->email.'");');
        }
        catch (Exception $e){
            echo "erreur db",$e->getMessage();
        }
    }

//  Modification d'une valeur de la Table user en utilisant l'id (password ou name ou email)

    public static function modify($colone,$valeur,$id){

        $DB = new DB();
        $dns = $DB->connect();
        
        try{
            $sth = $dns->exec('UPDATE USER SET '.$colone.' = "'.$valeur.'" WHERE id = '.strval($id).';');
        }
        catch (Exception $e){
            echo "erreur db",$e->getMessage();
        }
    }

}

?>