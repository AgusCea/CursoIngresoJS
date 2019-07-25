function mostrar()
{

	var contador=0;
	var positivo=0;
  var negativo=1;
  
  var respuesta=true;
  var numero;

  while(respuesta){
    do{
      numero=prompt("Ingresar número");
      numero=parseInt(numero);
    }while(isNaN(numero));

    if(numero>0){
      positivo=positivo+numero;
    }else if(numero<0){
      negativo=negativo*numero;
    }
    respuesta=confirm("¿Desea escribir otro número");
  }



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}

/*
var numero;
var suma=0;
var multiplicacion=1;

while(confirm("....")){
  do{
    nunero=prompt("eurghqoierg")
    numero=parseInt(numero);
  }while(isNan(numero));
  if(numero>=0){
    suma+=numero;
  }else{
    multiplicacion*=numero;
  }
}
*/
