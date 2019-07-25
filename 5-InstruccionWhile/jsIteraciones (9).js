function mostrar()
{

  var maximo;
  var minimo;
  var numero
  var primeraIteracion=true;
  var respuesta=true;

  while(respuesta){
    do{
      numero=prompt("Ingresar número");
      numero=parseInt(numero);
    }while(isNaN(numero));

    if(primeraIteracion){
      primeraIteracion=false;
      minimo=numero;
      maximo=numero;;
    }else if(numero>maximo){
      maximo=numero;
    }else if(numero<minimo){
      minimo=numero;
    }

    respuesta=confirm("¿Desea continuar?");
  }
  
  document.getElementById("maximo").value=maximo;
  document.getElementById("minimo").value=minimo;


}//FIN DE LA FUNCIÓN
