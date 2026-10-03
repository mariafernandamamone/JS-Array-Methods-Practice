import { empleados } from "../data/empleados.js";

const obtenerEstadisticasSeniority = (listaEmpleados) => {
  const estadisticasSeniority = listaEmpleados.reduce((acc, empleado) => {
    let seniority = empleado.seniority;
    acc[seniority] = (acc[seniority] || 0) + 1;
    return acc;
  }, {});
  return estadisticasSeniority;
};

console.log(obtenerEstadisticasSeniority(empleados));
