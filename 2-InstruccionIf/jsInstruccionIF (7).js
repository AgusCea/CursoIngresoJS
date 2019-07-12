function mostrar()
{
  var edad;
  var estadoCivil;
  edad = document.getElementById("edad").value;
  estadoCivil = document.getElementById("estadoCivil").value;
  if(edad<18 && estadoCivil!="Soltero"){alert("eres muy joven para NO ser solteo")}
}
