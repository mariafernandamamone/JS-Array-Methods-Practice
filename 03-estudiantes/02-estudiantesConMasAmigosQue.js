import { estudiantes } from "../data/estudiantes.js";

const estudiantesConMasAmigosQue = (cantidadAmigos, listaEstudiantes) =>
  listaEstudiantes
    .filter((estudiante) => estudiante.amigos.length >= cantidadAmigos);

console.table(estudiantesConMasAmigosQue(4, estudiantes));