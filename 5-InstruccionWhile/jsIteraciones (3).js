function mostrar()
{
  var contador=0;
  contador=prompt("escribe una clave");

  while(contador!="utn750"){
    contador++;
    contador=prompt("Escriba la clabe otra vez");
    if(contador==3){
      alert("Ya fue").break;
    }
  }


}

/*
var error=false;
var clave;
var contador=0;
do{
  clave=prompt("Escribe una clave");
  contador++;
  if(contador==3){
    error=true;
    break;
  }
}while(clave!="utn750");
*/
