function mostrar()
{
    var nota;
    var sexo;
    var contador=0;
    var acumuladorNota=0;
    var notaBaja=0;
    var sexoNotaBaja;
    var primeraVez=true;

    do{
        do{
            nota=prompt("Ingresar nota");
            nota=parseInt(nota);
            contador++;
        }while(isNaN(nota));
        acumuladorNota=acumuladorNota+nota;

        do{
            sexo=prompt("Ingresar sexo: f o m");
        }while(sexo!="f"&&sexo!="m");

        if(primeraVez){
            primeraVez=false;
            notaBaja=nota;
            sexoNotaBaja=sexo;
        }else{
            if(nota<notaBaja){
                notaBaja=nota;
                sexoNotaBaja=sexo;
            }
        }

    }while(contador<5);

    alert("El promedio gral es de "+(acumuladorNota/contador));
    alert("el genero con la nota mas baja es: "+sexoNotaBaja);
}
