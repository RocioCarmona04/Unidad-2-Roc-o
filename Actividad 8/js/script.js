  function MensajeIf() {
  }


  function MensajeSwitch() {
      let Hora = parseInt(document.getElementById("caja").value); 
     
      switch (Hora) {
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            document.getElementById("resultado").innerHTML = "Buenos dias";
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
            document.getElementById("resultado").innerHTML = "Buenos tardes";
            break;
            
            case 22:
            case 23:
            case 24:
            case 0:           
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                document.getElementById("resultado").innerHTML = "Buenas noches";
          break;

              default:
                document.getElementById("resultado").innerHTML = "Hora no válida";
              break;
         }  
      }
  

