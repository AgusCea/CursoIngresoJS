/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var valorImporte;
    var valorResultado;
    var descuento;

    valorImporte = document.getElementById("importe").value;
    valorImporte = parseInt (valorImporte);

    descuento = valorImporte*0.25;
   
    valorResultado = valorImporte - descuento;
    //alert(valorResultado)
    document.getElementById("resultado").value = valorResultado;
}
