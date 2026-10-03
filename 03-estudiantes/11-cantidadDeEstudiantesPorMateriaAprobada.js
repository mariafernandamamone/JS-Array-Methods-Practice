import { estudiantes } from "../data/estudiantes.js";

const cantidadDeEstudiantesPorMateriaAprobada = (listaEstudiantes) => {
  const estudiantesPorMateriaAprobada = listaEstudiantes.reduce(
    (acc, estudiante) => {
      const materias = Object.keys(estudiante.notas);
      materias.forEach((materia) => {
        estudiante.notas[materia] > 6
          ? (acc[materia] = acc[materia] ? acc[materia] + 1 : 1)
          : null;
      });
      return acc;
    },
    {},
  );
  return estudiantesPorMateriaAprobada;
};

console.log(cantidadDeEstudiantesPorMateriaAprobada(estudiantes));
