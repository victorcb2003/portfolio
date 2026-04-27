<?php

// On inclue la class user
include "./class/user.php";
include "./partial/header.php";


if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["submit"])) {

    //  On vérifie que les champs soient tous remplis
    if (!empty($_POST["username"]) && !empty($_POST["password"])) {

        // On empêche les injections et on récupaire les informations dans le formulaire
        $username = $_POST["username"];
        $password = $_POST["password"];
        $username = htmlspecialchars($username);
        $password = htmlspecialchars($password);
        $newuser = new user($username, $password);

        if ($newuser->Connection()) {

            $success = "Connection réussie";
            session_start();
            // On crée une variable de session qui contient l'id du user connecté
            $_SESSION["id"] = $newuser->id();

        } else {
            $error = "Mauvais identifiants";
        }
    } else {
        $error = "Veuillez remplir tous les champs";
    }
}
?>

    <h1>Login</h1>
    
    <form action="#" method="POST">
        <input type="text" placeholder="username" name="username" id="username">
        <input type="password" placeholder="password" name="password" id="password">
        <input type="submit" name="submit" value="Login">
    </form>

    <!-- On affiche les erreures et les succès de la connection -->
    <?php if (isset($error)) : ?>

        <h3><?= $error ?></h3>

    <?php endif ?>
    <?php if (isset($success)) : ?>

        <h3><?= $success ?></h3>

    <?php endif ?>

<?php include "./partial/footer.php";