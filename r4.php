<?php
session_start();
$c5 = $_POST["c5"];
$c6 = $_POST["c6"];
$c7 = $_POST["c7"];
$c8 = $_POST["c8"];
$action = true;
$response = "Invalid combination";
$array = array(".$c5", ".$c6", ".$c7", ".$c8");
if ($array == $_SESSION["combo"]){
    $response = "Bingo!";
}
echo $response;
