<?php
session_start();
$s1er = $s2er = $s3er = $s4er ="";
$s1 = $s2 = $s3 = $s4 ="";
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

if ($_SERVER["REQUEST_METHOD"]=="POST"){
    if (empty($_POST["c1"])){
        $s1er = "value is required";
    }elseif ($c1 <1){
        $s1er = "value must be positive";
    }elseif ($c1 >9){
        $s1er = "value must be one digit";
    }
    else {
        $s1 = test_input($_POST["c1"]);
    }
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
$respuesta = '{"c1":"' . $c1 . '"
, "c2":"' . $c2 . '"
, "c3":"' . $c3 . '"
, "c4":"' . $c4 . '"
, "s1er":"' . $s1er . '"}';
echo $respuesta;
