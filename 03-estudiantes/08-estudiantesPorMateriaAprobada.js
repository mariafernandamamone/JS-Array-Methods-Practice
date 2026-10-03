import { estudiantes } from "../data/estudiantes.js";

const estudiantesPorMateriaAprobada = (listaEstudiantes, materia) =>
  listaEstudiantes.filter(((estudiante) => (estudiante.notas[materia]) > 6));

console.log(estudiantesPorMateriaAprobada(estudiantes, "Herbologia"));