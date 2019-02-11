$(document).ready(function() {

  $.getJSON("tablaComics.php", function(data) {
    var datosComic = "";
    $.each(data, function(key, value) {
      datosComic += "<tr>";
      datosComic += "<td>" + value.titulo + "</td>";
      datosComic += "<td>" + value.descripcion.substring(0, 140) + "...</td>";
      datosComic += "<td>" + value.anyo + "</td>";
      datosComic += "<td>" + value.autor + "</td>";
      datosComic += "<td class='editar'><i class='fa fa-pencil-alt' style='font-size:24px' aria-hidden='true'></i></td>";
      datosComic += "<td class='eliminar'><i class='fa fa-trash' style='font-size:24px;margin-left:10px' aria-hidden='true'></i></td>";
      datosComic += "</tr>";
    });

    var cabecera = "<tr><th>Título</th><th>Descripción</th><th>Año</th><th>Autor</th><th>Editar</th><th>Eliminar</th></tr>";
    $(".table").append(cabecera);
    $(".table").append(datosComic);

  });

  $(".table").delegate(".editar", "click", function() {
    nombreComic = $(this).parent().children(":first").text();
    console.log(nombreComic);
    $(".table").fadeOut("quick", function() {
      $(".editar").fadeIn("quick", function() {});
    });
  });

  $(".table").delegate(".eliminar", "click", function() {

  });

  $("#modificar").submit(function(e) {
    e.preventDefault();
    var nombreComicNuevo = $("#nombre").val();
    var descripcion = $("#descripcion").val();
    var autor = $("#autor").val();
    var anyo = $("#anyo").val();
    var imagen = $("#imagen").val();
    var data = {
      "id": nombreComic,
      "nombre": nombreComicNuevo,
      "descripcion": descripcion,
      "autor": autor,
      "anyo": anyo,
      "imagen": imagen
    }


    $.post("modificar.php", {modificar:data}, function(data){
      console.log(data);
      
    });
  })

});

/*function editarDB() {
  var nombreComicNuevo = $("#nombre").val();
  var descripcion = $("#descripcion").val();
  var autor = $("#autor").val();
  var anyo = $("#anyo").val();
  var imagen = $("#imagen").val();
  //var json = JSON.stringify("{'nombre':'" + nombreComicNuevo + "', 'descripcion':'" + descripcion + "', 'autor':'" + autor + "', 'anyo':'" + anyo + "', 'imagen':'" + imagen + "',}");
  var data = {"nombre":nombreComicNuevo, "descripcion":descripcion, "autor":autor, "anyo":anyo, "imagen":imagen}

  $.ajax({
            type: "POST",
            dataType: "json",
            url: "modificar.php",
            data: {modificar:data},
            success: function(data){
                alert(data);
            },
            error: function(e){
                console.log(e.message);
            }
    });
}*/
