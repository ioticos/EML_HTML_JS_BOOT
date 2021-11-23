function sumaNumeros(numero1, numero2){
    const resultado = numero1 + numero2;
    return resultado; 
}

function enviarEmail(mensaje){
    console.log("Email enviado correctamente!");
    console.log("Mensaje enviado: " + mensaje)
}

const resultado = sumaNumeros(3, 7);
enviarEmail(resultado);

//sumaNumeros(3, 7);
















function saluda(nombre){
    console.log("Hola amigo " + nombre);
    console.log(nombre);
}
//saluda("Martín");












function imprime(){
    console.log("Hola mundo."); //res 1
    console.log("Hola mundo."); //res 2
    console.log("Hola mundo.");
    console.log("Hola mundo.");
    console.log("Hola mundo.");
}


for(var i = 0; i < 5; i++){
    //imprime();
}

var contador = 0;
while (contador < 5) {
    //imprime();
    contador++;
}





















