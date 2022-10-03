<?php

$recepient = "atrofimov2016@gmail.com";
$siteName = "Автосалон";

$name = trim($_POST["name"]);
$title = trim($_POST["title"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$hidden = trim($_POST["hidden"]);

$message = "Номер: $hidden \n Имя: $title \nТелефон: $phone \nEmail: $email";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
