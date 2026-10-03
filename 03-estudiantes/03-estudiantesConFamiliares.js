import { estudiantes } from "../data/estudiantes.js";

const estudiantesConFamiliares = (listaEstudiantes, familiares) =>
listaEstudiantes.filter((estudiante) => estudiante.familiares.some(animal => familiares.includes(animal)));

console.log(estudiantesConFamiliares(estudiantes, ["Rata", "Perro"]));