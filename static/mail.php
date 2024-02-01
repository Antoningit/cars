<?php

$recepient = "atrofimov2016@gmail.com,djonlions@gmail.com,vegaiwanov@yandex.ru";
$siteName = "Автосалон";

$name = trim($_POST["name"]);
$title = trim($_POST["formTitle"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$carTitle = trim($_POST["title"]);
$carId = trim($_POST["id"]);
$model = trim($_POST["model"]);
$mod = trim($_POST["mod"]);
$hidden = trim($_POST["hidden"]);

$message = "Имя: $title \n Телефон: $phone \n Id: $carId \n Марка: $carTitle \n Модель: $model \n Мод: $mod";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
