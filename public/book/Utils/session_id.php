<?php

// envoie de l'id du user au script js
session_start();
echo json_encode(["user_id" => $_SESSION["id"]]);

?>