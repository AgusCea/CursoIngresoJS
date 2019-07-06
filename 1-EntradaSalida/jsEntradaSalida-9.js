/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var valorimporte;
    var valorresultado;

    valorimporte = document.getElementById("sueldo").value;
    console.log(valorimporte); //esto solo puede verlo el programador
    valorimporte = parseInt(valorimporte);

    valorresultado = valorimporte;
    valorresultado = document.getElementById("resultado").value
    //lo ultimo esta mal, debo poner document=resultado
}
