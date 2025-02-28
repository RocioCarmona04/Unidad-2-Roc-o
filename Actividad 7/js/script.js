function ComprobarNota() {
  let entrada = document.getElementById("espacio").value;
  let nota = parseFloat(entrada);

 
  if (nota<0 || nota>10) {
    //La nota no valida (Es muy baja O muy alta)
    document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida";
    return;
  }
 let mensaje;
  if (nota < 5) {
    mensaje = " Suspenso";
  } else if (nota < 6) {
    mensaje = "Suficiente";
  } else if (nota < 7) {
    mensaje = "Bien";
  } else if (nota < 9) {
    mensaje = "Notable";
  }else {
    mensaje = "Sobresaliente";
  }
  document.getElemntById("resultado").innerHTML = mensaje;
}
      
