const usuario = "Javier";
const contraseña = "js2023";

alert("Bienvenido Profesores");

let intento = 1;

do {
    let user = prompt("Nombre de Usuario");
    let pasword = prompt("Ingresa tu contraseña");

    if (usuario === user && contraseña === pasword) {
        alert("Bienvenido " + usuario);
        break;
        
    } else {
        alert("No sos mi tutor");
        intento = intento + 1;
    }

    if (intento > 3) {
        alert("Has excedido el número de intentos.");
        brack;
        
    }
} while (true);

let materias = ["Ingles", "Historia", "Matematicas"];

let alumnos = [
    { nombre: "Juan", notas: [] },
    { nombre: "Pedro", notas: [] },
    { nombre: "Diego", notas: [] },
    { nombre: "Lucia", notas: [] },
    { nombre: "Ana", notas: [] }
];

alumnos.forEach(function(alumno) {
    
    alert(`Ingrese las notas para ${alumno.nombre}:`); 
    
    for (let i = 0; i < materias.length; i++) {
        let nota;
        do {
            nota = Number(prompt(`Nota en ${materias[i]} (de 1 a 10)`));
        } while (nota < 1 || nota > 10); 
        alumno.notas.push(nota);
    }

    let sum = alumno.notas.reduce(function(total, nota) {
        return total + nota;
    }, 0);
    let promedio = sum / alumno.notas.length;
    alert(`Promedio de notas para ${alumno.nombre}: ${promedio.toFixed(2)}`);  
    
    let notasPorMateria = "";
    for (let i = 0; i < materias.length; i++) {
        notasPorMateria += `${materias[i]}: ${alumno.notas[i]}\n`;
    }
    alert(`Notas de cada materia:\n${notasPorMateria}`);
});

