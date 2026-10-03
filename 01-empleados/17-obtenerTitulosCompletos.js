import { empleados } from "../data/empleados.js";

const obtenerTitulosCompletos = (listaEmpleados) => 
  listaEmpleados.map(
    (empleado) =>
      `${empleado.nombre}, ${empleado.seniority} ${empleado.puesto}, ${empleado.area}`,
  );

console.log(obtenerTitulosCompletos(empleados));
