function mostrar()
{

	var contador=0;
	var acumulador=0;
  var respuesta='si';
  var numero;

  while(true){
    do{
      numero=prompt("Escriba un numero");
      if(numero==null){
        break;
      }
      numero=parseInt(numero);
    }while(isNaN(numero));
    if(numero==null){
      break;
    }
  }

  document.getElementById('suma').value=acumulador;
  document.getElementById('promedio').value=acumulador/contador;

}

/*
 while(true){
    do{
      numero=prompt("Escriba un numero");
      if(numero==null){
        break;
      }
      numero=parseInt(numero);
    }while(isNaN(numero));
    if(numero==null){
      break;
    }
  }
*/
