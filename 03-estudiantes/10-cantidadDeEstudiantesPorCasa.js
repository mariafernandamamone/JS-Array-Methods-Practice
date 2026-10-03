import { estudiantes } from "../data/estudiantes.js";

const cantidadDeEstudiantesPorCasa = (listaEstudiantes) => {
  const estudiantesPorCasa = listaEstudiantes.reduce((acc, estudiante) => {
    const casa = estudiante.casa;
    acc[casa] = 1;
    acc[casa] ? acc[casa]++ : acc[casa] + 1;
    return acc;
  }, {});
  return estudiantesPorCasa;
};

console.log(cantidadDeEstudiantesPorCasa(estudiantes));