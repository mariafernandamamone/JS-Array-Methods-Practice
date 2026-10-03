import { empleados } from "../data/empleados.js";

const obtenerInfoPuestos = (listaEmpleados) => 
  listaEmpleados.map(
    (empleado) => ({
      nombre: empleado.nombre, 
      area: empleado.area,
      puesto: empleado.puesto,
      seniority: empleado.seniority
    })
);

console.log(obtenerInfoPuestos(empleados));
