function cargarComics() {
  $(document).ready(function(){

    $.ajax({
      type: "GET",
      url: "cargarComics.php",
      succes: function(comic) {
        console.log("success",comic)
      }

    })
  }
}
