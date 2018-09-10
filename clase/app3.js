var cris = ['Cris', 28, true];
var facu = ['Facu', 20, true];
var roque = ['Roque', 33, false];

var alumnos = [cris, facu, roque];

function mostrarPersona(nombre, edad, cremonero) {
    console.log('Nombre:    ' + nombre);
    console.log('Edad:      ' + edad);
    console.log('Cremonero: ' + cremonero);
    console.log('-----');
}

// Actividad: usar la función mostrarPersona para ver en la consola la información de los alumnos

mostrarPersona(alumnos[0][0], alumnos[0][1], alumnos[0][2]);
mostrarPersona(alumnos[1][0], alumnos[1][1], alumnos[1][2]);
mostrarPersona(alumnos[2][0], alumnos[2][1], alumnos[2][2]);