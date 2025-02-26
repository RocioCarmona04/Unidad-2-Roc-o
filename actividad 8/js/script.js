function MensajeIf() {
    let hora;
    hora = parseFloat(document.getElementById("Espacio").value);

    if (hora<0 || hora>24) {
      document.getElementById("resultado").innerHTML = "El valor introducido no es válido"
    }
    else {
      if (hora>=7 && hora<=11) {
        document.getElementById("resultado").innerHTML = "Buenos días"
      }
      else{
        if (hora>12 && hora<21) {
        document.getElementById("resultado").innerHTML = "Buenas tardes"
        }
        else{
            document.getElementById("resultado").innerHTML = "Buenas noches"
        }
      }
        
    }

   
}

function MensajeSwitch() {
  let hora;
  hora = parseFloat(document.getElementById("Espacio").value);

  switch(hora){
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      document.getElementById("resultado").innerHTML = "Buenos días"
    break;

    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
      document.getElementById("resultado").innerHTML = "Buenas tartes"
    break;

    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 22:
    case 23:
    case 24:
      document.getElementById("resultado").innerHTML = "Buenas noches"
    break;

    default:
      document.getElementById("resultado").innerHTML = "El valor introducido no es válido"
    break;
  }
}
