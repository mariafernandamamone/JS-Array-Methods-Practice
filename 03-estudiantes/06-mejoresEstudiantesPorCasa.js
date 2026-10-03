import { estudiantes } from "../data/estudiantes.js";
import { obtenerPromedioDeEstudiante } from "./04-obtenerPromedioDeEstudiante.js";

export const mejoresEstudiantesPorCasa = (listaEstudiantes, casa) =>
  listaEstudiantes.filter(
    (estudiante) =>
      (obtenerPromedioDeEstudiante(estudiante) > 6) && (estudiante.casa === casa)
  );

console.log(mejoresEstudiantesPorCasa(estudiantes, "Gryffindor"));
