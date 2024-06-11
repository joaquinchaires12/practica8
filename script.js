var valores = [true, 5, false, "hola", "adios", 2];
var resultado = valores[3] > valores[4];
alert(resultado);
//colocar document.write () en cada uno de los alert para que se muestre como resultado
// Combinar valores booleanos
var valor1 = valores[0];
var valor2 = valores[2];
// Obtener un resultado TRUE
var resultado1 = valor1 || valor2;
document.write(resultado1);
// Obtener un resultado FALSE
var resultado2 = valor1 && valor2;
document.write("resultado 2: " + resultado2 +  "<br>");
// Operaciones matemáticas
var num1 = valores[1];
var num2 = valores[5];
var suma = num1 + num2;
document.write("Suma: " + suma + "<br/>");
var resta = num1 - num2;
document.write("Resta: " + resta + "<br/>");
var multiplicacion = num1 * num2;
document.write("Multi: " + multiplicacion + "<br/>"");
var division = num1 / num2;
document.write("Divi""");
var modulo = num1 % num2;
document.write(modulo);