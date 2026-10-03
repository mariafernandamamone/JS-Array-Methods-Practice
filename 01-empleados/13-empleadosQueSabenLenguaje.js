import { empleados } from "../data/empleados.js";
import { empleadoSabeLenguaje } from "./12-empleadoSabeLenguaje.js";

const empleadosQueSabenLenguaje = (ListaEmpleados, lenguaje) =>
  ListaEmpleados.filter((empleado) => empleadoSabeLenguaje(empleado, lenguaje));

console.table(empleadosQueSabenLenguaje(empleados, "JS"));
