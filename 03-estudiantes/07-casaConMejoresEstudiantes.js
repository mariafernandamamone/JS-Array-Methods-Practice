import { estudiantes } from "../data/estudiantes.js";
import { mejoresEstudiantesPorCasa } from "./06-mejoresEstudiantesPorCasa.js";

const casaConMejoresEstudiantes = (listaEstudiantes) => {
  const casas = ["Hufflepuff", "Slytherin", "Gryffindor", "Ravenclaw"];
  const mejorCasa = casas.reduce((casaGanadora, casaActual) => {
    return mejoresEstudiantesPorCasa(listaEstudiantes, casaGanadora).length > mejoresEstudiantesPorCasa(
      listaEstudiantes,
      casaActual).length ? casaGanadora : casaActual;
  });
  return mejorCasa;
};

console.log(casaConMejoresEstudiantes(estudiantes));
