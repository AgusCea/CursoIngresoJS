function mostrar()
{
    var datoUno;
    var datoDos;
    datoUno = parseInt(prompt("Ingresar primer número"));
    datoDos = parseInt(prompt("Ingresar segundo número"));
    if(datoUno==datoDos){
        alert(datoUno+"_"+datoUno)
    }else if(datoUno>datoDos){
        alert(datoUno-datoDos)
    }else if(datoUno<datoDos){
        alert(datoUno+datoDos)
    }/*else if((datoUno+datoDos)>10){
        alert("La suma es _"+(datoUno+datoDos)+"_ y superó el número 10")
    }*/
}
