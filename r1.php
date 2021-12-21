<?php
session_start();

$c1 = $_POST["c1"];
$c2 = $_POST["c2"];
$c3 = $_POST["c3"];
$c4 = $_POST["c4"];

$respuesta = '{"c1":"' . $c1 . '"
, "c2":"' . $c2 . '"
, "c3":"' . $c3 . '"
, "c4":"' . $c4 . '"}';
echo $respuesta;
