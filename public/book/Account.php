<?php

include "./partial/header.php";
include "./class/user.php";
session_start();

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["subUser"])) {

    // On vérifie que les champs soient tous remplis
    if (!empty($_POST["username"]) && !empty($_POST["confUsername"])) {

        if ($_POST["username"] === $_POST["confUsername"]) {

            // On empêche les injections et on verifie si le username est dejà utilisé
            $username = htmlspecialchars($_POST["username"]);
            if (user::verifUser($username)) {

                // On modifie la valeur du username dans la DB avec l'id du user connecté
                user::modify("USERNAME", $username, $_SESSION["id"]);
                $success = "Votre username a bien été changé.";

            } else {
                $error = "Le username " . $username . " est deja utilisé";
            }
        } else {
            $error = "Vous devez mettre deux fois le même username";
        }
    } else {
        $error = "Veuillez remplir tous les champs";
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["subPassword"])) {

    // 2) On vérifie que les champs soient tous remplis
    if (!empty($_POST["password"]) && !empty($_POST["confPassword"])) {

        if ($_POST["password"] === $_POST["confPassword"]) {

            // On empêche les injections, on hash le password et on le modifie dans la DB
            $password = htmlspecialchars($_POST["password"]);
            $hash = password_hash($password, PASSWORD_DEFAULT);
            $success = "Votre password a bien été changé.";
            user::modify("PASSWORD", $hash, $_SESSION["id"]);

        } else {
            $error = "Vous devez mettre deux fois le même password";
        }
    } else {
        $error = "Veuillez remplir tous les champs";
    }
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["subEmail"])) {

    // 2) On vérifie que les champs soient tous remplis
    if (!empty($_POST["email"]) && !empty($_POST["confEmail"])) {

        if ($_POST["email"] === $_POST["confEmail"]) {

            // On empêche les injections
            $email = htmlspecialchars($_POST["email"]);
            if (user::verifEmail($email)) {

                // On verifie si l'email n'est pas dejà utilisé et on le modifie dans la DB
                user::modify("email", $email, $_SESSION["id"]);
                $success = "Votre email a bien été changé.";
            } else {
                $error = "L'email " . $email . " est deja utilisé";
            }
        } else {
            $error = "Vous devez mettre deux fois le même email";
        }
    } else {
        $error = "Veuillez remplir tous les champs";
    }
}

?>


<h1>Account</h1>


<?php

session_start();

// On affiche le formuaire pour changer ses informations personnelles uniquement si un user est connecté
if ($_SESSION["id"] != null && $_SESSION != "") :

?>


    <form action="#" method="POST" class="contModify">
        <div class="modify">
            <h2>Nouvelle Username</h2>
            <input type="text" placeholder="nouvelle username" id="username" name="username">
            <input type="text" placeholder="confirmer le username" id="confUsername" name="confUsername">
            <input type="submit" id="subUser" name="subUser">
        </div>
        <div class="modify">
            <h2>Nouveau Password</h2>
            <input type="password" placeholder="nouveau password" id="password" name="password">
            <input type="password" placeholder="confirmer le password" id="confPassword" name="confPassword">
            <input type="submit" id="subPassword" name="subPassword">
        </div>
        <div class="modify">
            <h2>Nouvelle Email</h2>
            <input type="email" placeholder="nouvelle email" id="email" name="email">
            <input type="email" placeholder="confirmer l'email" id="confEmail" name="confEmail">
            <input type="submit" id="subEmail" name="subEmail">
        </div>
    </form>


<?php else : ?>

    <h2>Vous devez d'abord vous connecter</h2>

<?php endif ?>

<!-- On affiche les erreurs et les succès pour les chnagements d'informations personnelles -->
<?php if (isset($error)) : ?>

    <h3><?= $error ?></h3>

<?php endif ?>

<?php if (isset($success)) : ?>

    <h3><?= $success ?></h3>

<?php endif ?>


<!-- On insert le bouton de déconnexion  -->
<div id="deco">
    <?php include "./Utils/deconnexion.php" ?>
</div>


<?php include "./partial/footer.php" ?>