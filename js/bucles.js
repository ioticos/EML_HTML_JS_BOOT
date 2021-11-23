var notas = [5, 4, 6, 2, 6, 7, 8, 9, 10];
var notasMenores = 0;

for (var index = 0; index < notas.length; index++) {
   
    if (notas[index] < 6){
        notasMenores++;
    }
    
}

document.write("Encontramos " + notasMenores + " notas menores a 6");
document.write("<br><br>");

var contador = 0;
while (contador < notas.length) {
    document.write(notas[contador] + ", ") 
    contador++;   
}
// // BUCLE FOR
// for (var i = 0; i < 5; i++) {
//     document.write("Hola Mundo desde FOR " + i + " --- <br>");
//     console.log(i);
// }

// var contador = 0;

// // BUCLE WHILE
// while (contador < 5) {
//     document.write("Hola Mundo desde WHILE " + contador + " --- <br>");
//     contador++;
// }





