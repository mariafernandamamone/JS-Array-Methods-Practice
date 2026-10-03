import { empleados } from '../data/empleados.js';

export const empleadoSabeLenguaje = (empleado, lenguaje) => 
  empleado.lenguajes.includes(lenguaje);

console.log(empleadoSabeLenguaje(empleados[2], "JS"));