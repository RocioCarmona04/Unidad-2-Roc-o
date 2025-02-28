function Comprobar() {
    let entrada = document.getElementById("espacio").value;
    let nota = parseFloat(entrada); 

    if (isNaN (nota)){
    document.getElementById("resultado").innerHTML = "Por favor, ingresa un número válido";
    return;
    }

   
    if (nota < 0 || nota > 10) {
      document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida";
      return;
    }

   let mensaje;
    if (nota < 5) {
        mensaje = "Suspenso";
     } else {
        mensaje = "Aprobado";
        }
    document.getElemntById("resultado").innerHTML = mensaje;
  }