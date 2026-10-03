import { empleados } from '../data/empleados.js';

const empleadosConMejorSueldo = (listaEmpleados) => 
  [...listaEmpleados]
    .sort((a, b) => b.sueldo - a.sueldo)
    .slice(0, 10);

console.table(empleadosConMejorSueldo(empleados));