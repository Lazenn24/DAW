<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calcule su IMC</title>
</head>
<body>
	<h1>Calcule su IMC</h1>
	<form action="RegisterIMC" method="POST">
		<label for="altura">Introduzca su altura</label>
		<input id="altura" type="text" name="altura">
		<br>
		<label for="peso">Introduzca su peso</label>
		<input id="peso" type="text" name="peso">
		<br>
		<input type="sumbit">
		<input type="reset">
	</form>
	
</body>
</html>