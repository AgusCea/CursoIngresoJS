function mostrar()
{
  var mesDelAño;
  var mesDelAño = document.getElementById('mes').value;
  switch(mesDelAño){
    case"Enero":
    case"Marzo":
    case"Mayo":
    case"Julio":
    case"Agosto":
    case"Octubre":
    case"Diciembre":alert("este mes tiene 31 días").break;
    case"Abril":
    case"Junio":
    case"Septiembre":
    case"Noviembre":alert("este mes tiene 30 días").break;
    case"Febrero":alert("este mes tiene 28 días").break;
  }






}//FIN DE LA FUNCIÓN
