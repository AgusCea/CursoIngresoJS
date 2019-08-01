
function mostrar()
{
  var base;
  var altura;
  var perimetro;
  base=prompt("Inscribe la medida de la base");
  base=parseInt(base);
  altura=prompt("Inscribe la medida de la altura");
  altura=parseInt(altura);
  perimetro=(2*base+2*altura);
  alert("La medida del perímetro es: "+perimetro);
}
