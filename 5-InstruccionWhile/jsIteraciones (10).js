function mostrar()
{
	var contador=0;

	var contadorPositivos=0;
	var contadorNegativos=0;
	var acumuladorPositivos=0;
	var acumuladorNegativos=0;
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
		}

		respuesta=confirm("Desea escribir otro número");
	}
	document.write("1. suma de positivos: "+acumuladorPositivos+"<br>");
	document.write("2. suma de negativos: "+acumuladorNegativos+"<br>");
	document.write("3. cantidad de positivos: "+contadorPositivos+"<br>");
	document.write("4. cantidad de negativos: "+contadorNegativos+"<br>");
}