function mostrar()
{
    var letra;
    var numero;

    var contadorPares=0;
    var contadorImpares=0;
    var contadorCeros=0;

    var contadorPositivos=0;
    var acumuladorPositivos=0;
    var acumuladorNegativos=0;

    var primeraVez=true;
    var letraMax;
    var letraMin;
    var numeroMax=0;
    var numeroMin=0;

    var respuesta=true;

    while(respuesta){

        do{
            letra=prompt("Ingresar una letra");
        }while((letra<"A"||letra>"Z")&&(letra<"a"||letra>"z"));

        do{
            do{
                numero=prompt("Ingresar un numero entre -100 y 100");
                numero=parseInt(numero);
            }while(numero<-100||numero>100);
        }while(isNaN(numero));

        if(numero%2==0){
            contadorPares++;
        }else{
            if(numero%2==1){
                contadorImpares++;
            }else{
                if(numero==0){
                    contadorCeros++;
                }
            }
        }

        if(numero>0){
            contadorPositivos++;
            acumuladorPositivos=acumuladorPositivos+numero;
        }else{
            if(numero<o){
                acumuladorNegativos=acumuladorNegativos+numero;
            }
        }

        if(primeraVez){
            primeraVez=false;
            letraMax=letra;
            letraMin=letra;
            numeroMax=numero;
            numeroMin=numero;
        }else{
            if(numero>numeroMax){
                letraMax=letra;
                numeroMax=numero;
            }else{
                if(numero<numeroMin){
                    letraMin=letra;
                    numeroMin=numero;
                }
            }
        }
        
        respuesta=confirm("¿Quiere inscribir mas datos?")
    }
    document.write("1. la cantidad de numeros pares ingresados es: "+contadorPares+"<br<");
    document.write("2. la cantidad de impares ingresados es: "+contadorImpares+"<br>");
    document.write("3. la cantidad de ceros ingresados es: "+contadorCeros+"<br>");
    document.write("4. el promedio gral de los positivos es: "+(acumuladorPositivos/contadorPositivos)+"<br>");
    document.write("5. la suma de los negativos resulta en: "+acumuladorNegativos+"<br>");
    document.write("6. el mayor es "+numeroMax+" con letra "+letraMax+"<br>");
    document.write("7. el menor es "+numeroMin+" con letra "+letraMin+"<br>");
}
