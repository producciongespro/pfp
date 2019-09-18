<?php

$id = utf8_decode($_POST['id']);
$objetivo = utf8_decode($_POST['objetivo']);
$necesidad = utf8_decode($_POST['necesidad']);


echo $id;
echo $objetivo;
echo $necesidad;



$conn = new mysqli("localhost", "sistemap_gespro", "Hola123Gespro", "sistemap_pfp");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE planes SET objetivo='$objetivo', necesidad='$necesidad'   WHERE id='$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();


 ?>
