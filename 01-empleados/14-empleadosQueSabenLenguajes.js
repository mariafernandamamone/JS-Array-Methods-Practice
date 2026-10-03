import { empleados } from "../data/empleados.js";
import { empleadoSabeLenguaje } from "./12-empleadoSabeLenguaje.js";

const empleadosQueSabenLenguajes = (listaEmpleados, lenguajes) =>
  listaEmpleados.filter((empleado) =>
    lenguajes.every((lenguaje) => empleadoSabeLenguaje(empleado, lenguaje)),
  );

console.table(empleadosQueSabenLenguajes(empleados, ["JS", "Python"]));
