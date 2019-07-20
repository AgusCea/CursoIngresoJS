function mostrar()
{
  var clave;
  var contador=0;
  do{
    clave=prompt("Escribe una clave");
    contador++;
    if(contador==3){
      alert("Ya fue, no más");
      break;
    }
  }while(clave!="utn750");
}
