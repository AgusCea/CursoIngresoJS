function mostrar()
{
  var contador=0;
	var acumulador=0;
  var respuesta=true; //La respuesta es true hasta que se ingrese lo contrario en el confirm
  var numero;

  while(respuesta){
    do{
      numero=prompt("Escriba un numero");
      numero=parseInt(numero);
    }while(isNaN(numero));
    contador++;
    acumulador=acumulador+numero;
    respuesta=confirm("¿Desea continuar?");
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/contador;

}
