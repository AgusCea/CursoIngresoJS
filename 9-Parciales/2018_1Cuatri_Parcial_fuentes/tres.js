function mostrar()
{
  var valorPrecio;
  var valorDescuento;
  var precioFinal;

  valorPrecio=parseInt(prompt("Escribir el precio"));
  valorDescuento=parseInt(prompt("Escribir el valor de descuento"));
  precioFinal=valorPrecio-((valorPrecio/100)*valorDescuento);
  alert(precioFinal);
}
