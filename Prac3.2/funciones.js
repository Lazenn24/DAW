function cargarComics() {
  $(document).ready(function(){

    $.ajax({
      type: "GET",
      url: "cargarComics.php",
      
    })
  }
}
