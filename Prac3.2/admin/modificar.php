<?php

$datos = $_POST["modificar"];
$servername = "localhost";
$username = "admin";
$password = "admin";
$database = "COMICS";

$datosId = $datos["id"];
$nombre = $datos["nombre"];
$descripcion = $datos["descripcion"];
$anyo = $datos["anyo"];
$autor = $datos["autor"];
$imagen = $datos["imagen"];

if($descripcion == ""){
  echo "esta vacio y ya esta";
}

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Adios mundo cruel");
}


$sqlId = "select id from Comics where name = '". $datosId ."';";

$result = $conn->query($sql);

$id = "";

if($result->num_rows > 0) {

  while($row = $result->fetch_assoc()) {
    $id = $row["id"];
  }

}



 ?>
