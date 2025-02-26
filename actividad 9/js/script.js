function Factorial() {
    let resultado = 1;
    let numero = parseInt(document.getElementById("espacio").value);
    for (let interacion = 1; interacion<= numero; interacion = interacion + 1);{
      resultado = resultado * interacion;
    }
    document.getElementById("resultado").innerHTML = "El factorial de " + numero + "es " + resultado;
    }