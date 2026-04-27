<?php

include "./class/user.php";
include "./partial/header.php";


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["submit"])) {

    //  On vérifie que les champs soient tous remplis
    if (!empty($_POST["username"]) && !empty($_POST["password"]) && !empty($_POST["confirm-password"]) && !empty($_POST["email"])) {

        // On vérirife que les mdp soient les memes (sinon on affiche une erreur)
        if ($_POST["password"] === $_POST["confirm-password"]) {

            // On empêche les injections, on récupaire les informations du formulaire et on hash le password
            $username = $_POST["username"];
            $password = $_POST["password"];
            $email = $_POST["email"];
            $username = htmlspecialchars($username);
            $password = htmlspecialchars($password);
            $email = htmlspecialchars($email);
            $hash = password_hash($password, PASSWORD_DEFAULT);

            // On instencie un nouveau user
            $newuser = new user($username, $hash, $email);

            // On verifie que le username et l'email n'est pas dejà prix
            if (user::verifUser($username)) {
                
                if (user::verifEmail($email)) {

                    session_start();

                    // On insert le user dans la DB
                    $newuser->database();
                    $success = "Vous avez été enregistré.";
                    // On crée une variable de session qui contient l'id du user
                    $_SESSION["id"] = $newuser->id();

                } else {
                    $error = "L'email " . $email . " est deja utiliser.";
                }
            } else {
                $error = "Le username " . $username . " est dejà utiliser.";
            }
        } else {
            $error = "Attention les password sont différents.";
        }
    } else {
        $error = "Veuillez remplir tous les champs.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<h1>Sign up</h1>

<form action="#" method="POST">
    <input type="text" placeholder="username" name="username" id="username">
    <input type="email" placeholder="email" name="email" id="email">
    <input type="password" placeholder="password" name="password" id="password">
    <input type="password" placeholder="confirer le password" name="confirm-password" id="confirm-password">
    <input type="submit" name="submit" value="Signup">
</form>

<!-- On affiche les erreurs et les succès -->
<?php if (isset($error)) : ?>

    <h3><?= $error ?></h3>

<?php endif ?>

<?php if (isset($success)) : ?>

    <h3><?= $success ?></h3>

<?php endif ?>

<?php include "./partial/footer.php";
