function mostrar()
{
  var datoUno;
  var datoDos;

  datoUno=prompt("Ingresa un primer número");
  datoUno=parseInt(datoUno);
  datoDos=prompt("Ingresa un segundo número");
  datoDos=parseInt(datoDos);

  if(datoUno==datoDos){
    alert("Ambos son "+datoDos);
  }else if(datoUno>datoDos){
    alert(datoUno-datoDos);
  }else if(datoUno<datoDos&&(datoUno+datoDos)<=10){
    alert(datoUno+datoDos);
  }else if(datoUno<datoDos&&(datoUno+datoDos)>10){
    alert(datoUno+datoDos+", la suma superó al 10");
  }
}
