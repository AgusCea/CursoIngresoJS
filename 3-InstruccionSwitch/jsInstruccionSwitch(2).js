function mostrar()
{
  var mesDelAño
  var mesDelAño = document.getElementById('mes').value;
  switch(mesDelAño){
    case"Enero":
    case"Febrero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio":alert("el einvierno todavía no llega").break;
    case"Julio":
    case"Agosto":alert("estamos en invierno").break;
    case"Septiembre":
    case"Octubre":
    case"Noviembre":
    case"Diciembre":alert("el invierno ya pasó").break;
  }




}//FIN DE LA FUNCIÓN
