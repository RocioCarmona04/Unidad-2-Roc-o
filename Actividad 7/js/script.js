function Comprobar() {
  let nota;
  nota = parseFloat(document.getElementById("espacio").value);

 
  if (nota<0 || nota>10) {
    //La nota no valida (Es muy baja O muy alta)
    document.getElementById("resultado").innerHTML = "La nota que has puesto no es válida";
  }
  else {
    //Si es valida
    if (nota<5) {
      document.getElementById("resultado").innerHTML = "Suspenso";
    }
    else{
      document.getElementById("resultado").innerHTML = "Aprobado";
    }
  }

 
}