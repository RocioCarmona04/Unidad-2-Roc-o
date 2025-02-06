function Calcular() {
    let a;
    let b;
    a = parseInt(document.getElementById("num1").value);
    b = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = "El primer número es: "+(a)+"<br>El segundo número es: "+(b)+"<br>La suma es: "+(a+b)+"<br>La resta es: "+(a-b)+"<br>El producto es: "+(a*b)+"<br>La división es: "+(a/b)+"<br>El resto es: "+(a%b)
}