function mostrar()
{
    var planeta;
    planeta = prompt("Ingresar un planeta de nuestro sistema solar");
    switch(planeta){
        case"Mercurio":
        case"Venus":alert("Acá hace más calor").break;
        case"La Tierra":
        case"Tierra":alert("Acá vivimos, empezá a cuidarlo que no tenemos otro").break;
        case"Marte":
        case"Júpiter":
        case"Jupiter":
        case"Saturno":
        case"Urano":alert("Acá hace más frio").break;
        default:alert("No es un planeta o no forma parte de nuestro sistema solar").break;
    }
}
