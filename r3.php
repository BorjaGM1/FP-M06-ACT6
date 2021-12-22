<?php
session_start();
$q=$_POST["q"];
$id=$_POST["id"];
$idsub=substr($id,1,1);
$position=(intval($idsub))-5;
$a=$_SESSION["combo"];
$b=substr($a[$position],1,1);
if ($q == $b){
    $response="nice!";
}else {$response="wrong digit";}
echo $response;
?>
