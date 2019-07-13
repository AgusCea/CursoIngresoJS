/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var datoUno;
    var datoDos;
    var datoTres;
    datoUno=document.getElementById("precioUno").value;
    datoUno=parseInt(datoUno);
    datoDos=document.getElementById("precioDos").value;
    datoDos=parseInt(datoDos);
    datoTres=document.getElementById("precioTres").value;
    datoTres=parseInt(datoTres);
    alert(datoUno+datoDos+datoTres)
}
function Promedio () 
{
	var datoUno;
    var datoDos;
    var datoTres;
    datoUno=document.getElementById("precioUno").value;
    datoUno=parseInt(datoUno);
    datoDos=document.getElementById("precioDos").value;
    datoDos=parseInt(datoDos);
    datoTres=document.getElementById("precioTres").value;
    datoTres=parseInt(datoTres);
    alert((datoUno+datoDos+datoTres)/3)
}
function PrecioFinal () 
{
	var datoUno;
    var datoDos;
    var datoTres;
    var iva;
    datoUno=document.getElementById("precioUno").value;
    datoUno=parseInt(datoUno);
    datoDos=document.getElementById("precioDos").value;
    datoDos=parseInt(datoDos);
    datoTres=document.getElementById("precioTres").value;
    datoTres=parseInt(datoTres);
    iva = (((datoUno+datoDos+datoTres)/100)*21);
    alert((datoUno+datoDos+datoTres)+iva)
}//Este tampoco me salió