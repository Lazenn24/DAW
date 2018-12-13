<?php
$servername = "localhost";
$username = "root";
$password = "administrador";
$database = "COMICS";

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("Adios mundo cruel");
}

$sql = "select Comics.nombre, imagen, Autor.nombre, descripcion, año  from Comics, autor
where Comics.id = Autor.id;"

$result = $conn->query($sql);

$comic = [];
$arrayComics = [];

if($result->num_rows > 0) {
  while($row = $result->fetch-assoc()) {
    $comic["titulo"] = $row["Comics.nombre"];
    $comic["imagen"] = $row["imagen"];
    $comic["autor"] = $row["Autor.nombre"];
    $comic["descripcion"] = $row["descripcion"];
    $comic["año"] = $row["año"];
    array_push($arrayComics, $comic);
    unset($comic);
  }
  echo json_encode($arrayComics);
} else {
  echo null;
}
 ?>
