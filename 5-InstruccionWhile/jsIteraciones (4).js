function mostrar()
{
  var numero;
  numero=prompt("ingrese un número entre 0 y 9.");
  numero=parseInt(numero);

  while(numero<0||numero>9){
    numero=prompt("Escribe un numero con las indicaciones, entre 0 y 9");
    numero=parseInt(numero);
    while(isNaN(numero)){
      numero=prompt("Dejate de joder, eso NO es un numero");
      numero=parseInt(numero);
    }
  }
}
//Hacer con do while
