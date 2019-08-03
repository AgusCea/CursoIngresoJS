function mostrar()
{
  var planeta=prompt("Ingresar un planeta de nuestro sistema solar");
  
  switch(planeta){
    case"Mercurio":
    case"Venus":alert("Acá hace más calor").break;
    case"Tierra":alert("Acá vivimos").break;
    case"Marte":
    case"Júpiter":
    case"Saturno":
    case"Urano":alert("Acá hace más frío").break;
    default:alert("El elemento ingresado no es válido, está mal escrito o no pertenece a nuestro sistema solar").break;
  }
}
