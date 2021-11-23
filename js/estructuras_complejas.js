var alumnos = [
    {
        id: 1,
        nombre: "Juan",
        edad: 22,
        tel: "8768768767",
        familia: {
            padre: "Juan",
            madre: "María",
            hermanos: [
                {
                    nombre: "Martín",
                    edad: 12
                },
                {
                    nombre: "Julia",
                    edad: 15
                }
            ]
        }
    },
    {
        id: 1,
        nombre: "Pedro",
        edad: 22,
        tel: "8768768767",
        familia: {
            padre: "Juan",
            madre: "María",
            hermanos: [
                {
                    nombre: "Martín",
                    edad: 12
                },
                {
                    nombre: "Julia",
                    edad: 15
                }
            ]
        }
    },
    {
        id: 1,
        nombre: "Julián",
        edad: 22,
        tel: "8768768767",
        familia: {
            padre: "Juan",
            madre: "María",
            hermanos: [
                {
                    nombre: "Martín",
                    edad: 12
                },
                {
                    nombre: "Julia",
                    edad: 15
                }
            ]
        }
    }
]

var listaVideos = [
    {
        titulo: "ELON MUSK en 5 Minutos",
        canal: "Control de Misión",
        imagenCanal: "https:// bla vla.com",
        descripcion: "Elon Musk predice cómo será el futuro de la humanidad en una entrevista y posiblemente tenga razón en todo lo que ha dicho.",
        miniatura: "http://blabla.com",
        visitas: 5000,
        nuevo: true,
        comentarios: [
            {
                nombre: "juan",
                comentario: "Muy buen video",
                fecha: "",
                mostrar: false
            },
            {
                nombre: "juan",
                comentario: "Muy mal video",
                fecha: "",
                mostrar: false
            }
        ]
    },
    {
        titulo: "ELON MUSK en 5 Minutos",
        canal: "Control de Misión",
        imagenCanal: "https:// bla vla.com",
        descripcion: "Elon Musk predice cómo será el futuro de la humanidad en una entrevista y posiblemente tenga razón en todo lo que ha dicho.",
        miniatura: "http://blabla.com",
        visitas: 5000,
        nuevo: true
    },
    {
        titulo: "ELON MUSK en 5 Minutos",
        canal: "Control de Misión",
        imagenCanal: "https:// bla vla.com",
        descripcion: "Elon Musk predice cómo será el futuro de la humanidad en una entrevista y posiblemente tenga razón en todo lo que ha dicho.",
        miniatura: "http://blabla.com",
        visitas: 5000,
        nuevo: true
    }
]

console.log(listaVideos[0].comentarios[0].comentario);

listaVideos[0].comentarios[0].comentario = "Crea más contenido así!!!"

console.log(listaVideos[0].comentarios[0].comentario);