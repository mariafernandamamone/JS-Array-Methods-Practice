import { empleados } from '../data/empleados.js';

const agregarTecnologias = (listaEmpleados) => {
  listaEmpleados.forEach(empleado => {
    empleado.tecnologias = ["GIT", "Node.js"];
  });

  return listaEmpleados;
};

console.table(agregarTecnologias(empleados));