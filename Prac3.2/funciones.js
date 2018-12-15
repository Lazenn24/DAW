$(document).ready(function() {

  $.getJSON("cargarComics.php", function(data) {

    var datosComic = "";
    var arrayDatos = [];
    $.each(data, function(key, value) {
      datosComic += "<img class='imagen' src='" + value.imagen + "'>";
      datosComic += "<p class='tituloComic'>" + value.titulo + "</p>";
      datosComic += "<p class='autor'>Autor: " + value.autor + "</p>";
      datosComic += "<p class='anyo'>Año de publicación: " + value.anyo + "</p>";
      datosComic += "<p class='descripcion'>" + value.descripcion + "</p>";
      arrayDatos.push(datosComic);
      datosComic = "";
    });

    $(".comic").each(function(i) {
      $(this).append(arrayDatos[i]);
    });

  });

  $(".comic").click(function() {
    var comic = $(this).html();
    $(".container").fadeOut("quick", function() {
      $(".container").empty();
      $(".container").append("<div class='row'><div class='col-lg-12 mitad'><div class='comic'>" + comic + "</div></div></div>").fadeIn();
    });


  });

});

function buscarComic() {

  $(document).ready(function() {
    $("#comic").attr("placeholder", "");
    $("#comic").bind("keyup change", function() {
      var comic = $("#comic").val();
      $.getJSON("buscarComic.php?comic=" + comic, function(data) {
        $(".container").fadeOut("quick", function() {
          $(".container").empty();
          var datosComic = "";
          var arrayDatos = [];
          $.each(data, function(key, value) {
            datosComic += "<img class='imagen' src='" + value.imagen + "'>";
            datosComic += "<p class='tituloComic'>" + value.titulo + "</p>";
            datosComic += "<p class='autor'>Autor: " + value.autor + "</p>";
            datosComic += "<p class='anyo'>Año de publicación: " + value.anyo + "</p>";
            datosComic += "<p class='descripcion'>" + value.descripcion + "</p>";
            arrayDatos.push(datosComic);
            datosComic = "";
          });

          switch (arrayDatos.length) {

            case 1:
              console.log("Caso 1");
              $(".container").append("<div class='row'><div class='col-lg-12 mitad'><div class='comic'></div></div></div>");
              $(".comic").append(arrayDatos[0]);
              $(".container").fadeIn("quick");
              arrayDatos = [];
              break;

            case 2:
            console.log("Caso 2");
              $(".container").append("<div class='row'><div class='col-lg-6'><div class='comic mx-1'></div></div><div class='col-lg-6'><div class='comic mx-1'></div></div></div>1");
              $(".comic").each(function(i) {
                $(this).append(arrayDatos[i]);
              });
              $(".container").fadeIn("quick");
              arrayDatos = [];
              break;

            case 3:
            console.log("Caso 3");
              $(".container").append('<div class="row"><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div></div><div class="row"><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div></div>');
              $(".comic").each(function(i) {
                $(this).append(arrayDatos[i]);
              });
              $(".container").fadeIn("quick");
              arrayDatos = [];
              break;

            case 4:
            console.log("Caso 1");
              $(".container").append('<div class="row"><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div></div><div class="row"><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div><div class="col-lg-6"><div class="comic mx-1-my-3"></div></div></div>')
              $(".comic").each(function(i) {
                $(this).append(arrayDatos[i]);
              });
              $(".container").fadeIn("quick");
              arrayDatos = [];
              break;
          };
        });

      });
    });
  });
}
