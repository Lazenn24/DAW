function analizePass(){

  var pass;
  var potencia;
  var segundos;
  var passLength;
  var combinaciones;
  var minutos;
  var horas;
  var dias;
  var meses;
  var años;
  var decimales;
  var substring;

  if(document.getElementById("1000").checked){
    potencia = 1000;
  } else if (document.getElementById("10000").checked) {
      potencia = 10000;
  } else if (document.getElementById("1000000").checked) {
      potencia = 1000000;
  }

  pass = document.getElementById("text").value;

  passLength = pass.length;

  combinaciones = Math.pow(256, passLength);

  segundos = combinaciones / potencia;

  años = segundos / 31,536,000;

  meses = (años % 1) * 12;

  dias = (meses % 1) * 30;

  horas = (dias % 1) * 24;

  minutos = (horas % 1) * 60;

  segundos = (minutos % 1) * 60;




  document.getElementById("resultado").innerHTML = "Tu contraseña tardará en ser crackeada <br> Años " + Math.floor(años) + " Meses " + Math.floor(meses) +
      " Dias " + Math.floor(dias) + " Horas " + Math.floor(horas) + " Segundos " + Math.floor(segundos);

  // No funciona
  if(años < 10000000) {
    document.getElementById("myImg").src = "imagenes/pulgarAbajo.png";
    } else {
      document.getElementById("myImg").src = "imagenes/pulgarArriba.png";
  }



}

function removePlaceholder(){

  document.getElementById("text").value = "";

}
