import { empleados } from "../data/empleados.js";

const obtenerTitulosCompletos = (listaEmpleados) => 
  listaEmpleados.map(
    (empleado) => ({
      nombre: empleado.nombre, 
      pais: empleado.pais,
      edad: empleado.edad
    })
);

console.log(obtenerTitulosCompletos(empleados));
