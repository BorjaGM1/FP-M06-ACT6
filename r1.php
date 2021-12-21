<?php
session_start();
$a=1;
$b=9;
$c1 = $_POST["c1"];
$c2 = $_POST["c2"];
$c3 = $_POST["c3"];
$c4 = $_POST["c4"];
$action = true;
if ($c1 < $a || $c1 > $b){
    $action = false;
}
if ($c2 < $a || $c2 > $b){
    $action = false;
}
if ($c3 < $a || $c3 > $b){
    $action = false;
}
if ($c4 < $a || $c4 > $b){
    $action = false;
}
$response = "Invalid combination";
$array = array(".$c1", ".$c2", ".$c3", ".$c4");
if ($action){
    $_SESSION["combo"] = $array;
    $response = "Bingo!";
}
//print_r($_SESSION);
echo $response;








/*$respuesta = '{"c1":"' . $c1 . '"
, "c2":"' . $c2 . '"
, "c3":"' . $c3 . '"
, "c4":"' . $c4 . '"}';
*/
