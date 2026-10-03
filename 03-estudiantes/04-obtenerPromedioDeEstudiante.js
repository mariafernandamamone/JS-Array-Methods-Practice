import { estudiantes } from "../data/estudiantes.js";

export const obtenerPromedioDeEstudiante = (estudiante) => {
  const notas = Object.values(estudiante.notas);
  const sumaNotas = notas.reduce((acumulador, nota) => acumulador + nota, 0);
  const promedio = Number((sumaNotas / notas.length).toFixed(2));
  
  return promedio;
};

console.log(obtenerPromedioDeEstudiante(estudiantes[0]));