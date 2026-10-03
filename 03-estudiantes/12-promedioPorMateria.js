import { estudiantes } from "../data/estudiantes.js";

const promedioPorMateria = (listaEstudiantes) => {
  const materias = Object.keys(listaEstudiantes[0].notas);

  return materias.reduce((acc, materia) => {
    // 1. Sumamos la nota de esta 'materia' para TODOS los estudiantes
    const sumaNotas = listaEstudiantes.reduce((suma, estudiante) => {
      return suma + estudiante.notas[materia];
    }, 0);

    // 2. Calculamos el promedio dividiendo por la cantidad de estudiantes
    const promedio = sumaNotas / listaEstudiantes.length;

    // 3. Guardamos en el acumulador y lo retornamos
    acc[materia] = Number(promedio.toFixed(2));
    return acc;
  }, {});
};

console.log(promedioPorMateria(estudiantes));