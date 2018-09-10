var cris = ['Cris', 28, true];
var facu = ['Facu', 20, true];
var roque = ['Roque', 33, false];

var alumnos = [cris, facu, roque];

function mostrarPersona(persona) {
    console.log('Nombre:    ' + persona[0]);
    console.log('Edad:      ' + persona[1]);
    console.log('Cremonero: ' + persona[2]);
    console.log('-----');
}

// Actividad: usar la función mostrarPersona para ver en la consola la información de los alumnos

mostrarPersona(alumnos[0]);
mostrarPersona(alumnos[1]);
mostrarPersona(alumnos[2]);