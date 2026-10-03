import { empleados } from "../data/empleados.js";
import { empleadoSabeLenguaje } from "./12-empleadoSabeLenguaje.js";

const empleadesQueSabenAlgunosLenguajes = (listaEmpleados, lenguajes) =>
  listaEmpleados.filter((empleado) =>
    lenguajes.some((lenguaje) => empleadoSabeLenguaje(empleado, lenguaje)),
  );

console.table(empleadesQueSabenAlgunosLenguajes(empleados, ["JS", "Python"]));
