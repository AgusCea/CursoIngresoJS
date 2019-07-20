function mostrar()
{
  var numero;

  do{
    do{
      numero=prompt("Escribe un número con las indicaciones, entre 0 y 10");
      numero=parseInt(numero);
    }while(isNaN(numero)); 
  }while(numero<0||numero>10);
}
