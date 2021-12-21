<?php
$q=$_POST["q"];
$a=1;
$b=9;
if ($q < $a){
    $response="number must be positive";
}else if ($q > $b){
    $response="number must be only one digit";
}else {$response="nice!";}
    echo $response;

?>
