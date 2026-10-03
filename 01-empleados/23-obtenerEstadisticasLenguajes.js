import { empleados } from "../data/empleados.js";

const obtenerEstadisticasLenguajes = (listaEmpleados) => {
  const estadisticasLenguajes = listaEmpleados.reduce((acc, empleado) => {
    empleado.lenguajes.forEach(lenguaje => {
        acc[lenguaje] = (acc[lenguaje] || 0) + 1;
    });
    return acc;
  }, {});
  return estadisticasLenguajes;
};

console.log(obtenerEstadisticasLenguajes(empleados));
