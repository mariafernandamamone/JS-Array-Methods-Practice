import { empleados } from "../data/empleados.js";

const empleadosConSueldoMayorA = (listaEmpleados, sueldo) =>
  listaEmpleados
    .filter((empleado) => empleado.sueldo > sueldo)
    .sort((a, b) => a.sueldo - b.sueldo);

console.table(empleadosConSueldoMayorA(empleados, 150000));
