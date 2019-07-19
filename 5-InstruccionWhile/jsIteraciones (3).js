function mostrar()
{
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
}
