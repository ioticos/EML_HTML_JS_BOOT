var alumnos = [
    {
        nombre: "María",
        edad: 24,
        promedio: 8
    },
    {
        nombre: "Pedro",
        edad: 28,
        promedio: 7.22
    },
    {
        nombre: "Julio",
        edad: 19,
        promedio: 6
    },
    {
        nombre: "Benjamín",
        edad: 18,
        promedio: 9.5
    },
    {
        nombre: "Sergio",
        edad: 22,
        promedio: 7.5
    }
]


var mejoresAlumnos = [];

//mayores 19 y que tengan cal mayor 7
for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i].edad >= 19 && alumnos[i].promedio > 7) {
        console.log("ALUMNO ENCONTRADO!");
        console.log(alumnos[i].nombre);
        mejoresAlumnos.push(alumnos[i]);
    }
}

// EN EL COLEGIO DE LA BUENA ONDA, LOS PROMEDIOS > A 9
// AUTOMÁTICAMENTE SE VAN A 10
// ANALIZAMOS LLEVAR A CABO EL PROXIMO AÑO LO MISMO, PERO CON LOS MAYORES A 5
// :)
for (var i = 0; i < alumnos.length; i++) {
    if (alumnos[i].promedio >= 9) {
        console.log("ALUMNO ENCONTRADO!");
        alumnos[i].promedio = 10;
        mejoresAlumnos.push(alumnos[i])
    }
}


console.log(mejoresAlumnos);