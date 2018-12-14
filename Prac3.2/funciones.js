$(function() {

  $.getJSON("cargarComics.php", function(data) {

      var datosComic = "";
      var arrayDatos = [];
      $.each(data, function(key, value){
        datosComic += "<img class='imagen' src='" + value.imagen + "'>";
        datosComic += "<p class='tituloComic'>" + value.titulo + "</p>";
        datosComic += "<p class='autor'>Autor: " + value.autor +"</p>";
        datosComic += "<p class='anyo'>Año de publicación: " + value.anyo + "</p>";
        datosComic += "<p class='descripcion'>" + value.descripcion + "</p>";
        arrayDatos.push(datosComic);
        datosComic = "";
      });
      $("#comic1").append(arrayDatos[0]);
      $("#comic2").append(arrayDatos[1]);
      $("#comic3").append(arrayDatos[2]);
      $("#comic4").append(arrayDatos[3]);
  });
});
