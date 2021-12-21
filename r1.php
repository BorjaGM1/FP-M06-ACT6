<?php
session_start();
if (isset($_SESSION["contador"])) {
    $contador = $_SESSION["contador"];
} else {$contador = 0;}
if (is_numeric($contador)) {
    //es un valor numerico
}
$contador++;
$_SESSION["contador"] = $contador;
$c1 = $_POST["c1"];
$c2 = $_POST["c2"];
$c3 = $_POST["c3"];
$c4 = $_POST["c4"];

$respuesta = '{"c1":"' . $c1 . '"
, "c2":"' . $c2 . '"
, "c3":"' . $c3 . '"
, "c4":"' . $c4 . '"
, "s1er":"' . $s1er . '"}';
echo $respuesta;
