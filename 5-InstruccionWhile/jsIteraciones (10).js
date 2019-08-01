function mostrar()
{
	var contadorPositivos=0;
	var contadorNegativos=0;
	var acumuladorPositivos=0;
  var acumuladorNegativos=0;
  var contadorCeros=0;
  var contadorPares=0;
  var numero;

	var respuesta=true;

	while(respuesta==true){
		numero=prompt("Ingrese un número: ");
    numero=parseInt(numero);

		if(numero>0){
			contadorPositivos++;
			acumuladorPositivos=acumuladorPositivos+numero;
		}else if(numero<0){
			contadorNegativos++;
			acumuladorNegativos=acumuladorNegativos+numero;
		}else if(numero==0){
      contadorCeros++;
    }

    if(numero%2==0){
      contadorPares++;
    }

		respuesta=confirm("Desea escribir otro número");
  }
  document.write("1. suma de negativos: "+acumuladorNegativos+"<br>");
	document.write("2. suma de positivos: "+acumuladorPositivos+"<br>");
	document.write("3. cantidad de positivos: "+contadorPositivos+"<br>");
  document.write("4. cantidad de negativos: "+contadorNegativos+"<br>");
  document.write("5. cantidad de ceros: "+contadorCeros+"<br>");
  document.write("6. cantidad de numeros pares: "+contadorPares+"<br>");
  document.write("7. promedio de positivos: "+(acumuladorPositivos/contadorPositivos)+"<br>");
  document.write("8. promedio de negativos: "+(acumuladorNegativos/contadorNegativos)+"<br>");
  document.write("9. diferencia entre positivos y negativos: "+(acumuladorPositivos-acumuladorNegativos)+"<br>");
}
