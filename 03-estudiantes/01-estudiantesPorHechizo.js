import { estudiantes } from "../data/estudiantes.js";

const estudiantesPorHechizo = (listaEstudiantes, hechizo) =>
    listaEstudiantes.filter(estudiante => estudiante.hechizoPreferido === hechizo);

console.log(estudiantesPorHechizo(estudiantes, "Lumos"));