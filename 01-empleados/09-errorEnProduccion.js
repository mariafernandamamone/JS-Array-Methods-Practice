import { empleados } from '../data/empleados.js';

const errorEnProduccion = (listaEmpleados) => {
  listaEmpleados.forEach(empleado => {
    empleado.haceGuardia = true;
  });
  return listaEmpleados;
};

console.table(errorEnProduccion(empleados));