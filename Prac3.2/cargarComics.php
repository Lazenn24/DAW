<?php
$servername = "localhost";
$username = "select";
$password = "select";
$database = "COMICS";

// Crear conexión
$conn = mysqli_connect($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Adios mundo cruel");
}

$sql =
"select
    Comics.name as nombreComic, coverPage, Author.name as autor, description, year
from
    Comics, Author
where
    Comics.author = Author.id
order by
    Comics.id desc
limit 4;";

$result = $conn->query($sql);

$comic = [];
$arrayComics = [];

if($result->num_rows > 0) {

  while($row = $result->fetch_assoc()) {
    $comic["titulo"] = $row["nombreComic"];
    $comic["imagen"] = $row["coverPage"];
    $comic["autor"] = $row["autor"];
    $comic["descripcion"] = $row["description"];
    $comic["anyo"] = $row["year"];
    array_push($arrayComics, $comic);
    unset($comic);
  }

  echo json_encode($arrayComics);
} else {
  echo "No esta funcionando";
}

$conn->close();
 ?>
