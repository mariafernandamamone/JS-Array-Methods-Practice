import { estudiantes } from "../data/estudiantes.js";
import { obtenerPromedioDeEstudiante } from "./04-obtenerPromedioDeEstudiante.js";

const obtenerInfoResumida = (listaEstudiantes) =>
    listaEstudiantes.map((estudiante) => ({
      nombre: estudiante.nombre,
      casa: estudiante.casa,
      promedio: obtenerPromedioDeEstudiante(estudiante),
      amigos: estudiante.amigos.length
    }));

console.log(obtenerInfoResumida(estudiantes));