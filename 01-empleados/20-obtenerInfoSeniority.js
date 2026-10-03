import { empleados } from "../data/empleados.js";

const obtenerInfoPuestos = (listaEmpleados) => 
  listaEmpleados.map(
    (empleado) => ({
      nombre: empleado.nombre,
      seniority: empleado.seniority, 
      sueldo: empleado.sueldo,
      cantidadLenguajes: empleado.lenguajes.length
    })
);

console.log(obtenerInfoPuestos(empleados));
