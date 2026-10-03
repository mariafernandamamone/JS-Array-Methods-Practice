import { estudiantes } from "../data/estudiantes.js";
import { obtenerPromedioDeEstudiante } from "./04-obtenerPromedioDeEstudiante.js";

export const estudiantesConPromedioMayorA = (listaEstudiantes, promedio) =>
  listaEstudiantes.filter(
    (estudiante) =>
      obtenerPromedioDeEstudiante(estudiante) > promedio
  );

console.log(estudiantesConPromedioMayorA(estudiantes, 6));
