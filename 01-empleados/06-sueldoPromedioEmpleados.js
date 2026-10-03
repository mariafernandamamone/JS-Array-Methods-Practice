import { empleados } from "../data/empleados.js";

const sueldoPromedioEmpleados = (listaEmpleados) => {
  const sumaSueldos = listaEmpleados.reduce(
    (acc, empleado) => acc + empleado.sueldo,
    0,
  );
  return Math.round(sumaSueldos / listaEmpleados.length);
};

console.log("Sueldo promedio:", sueldoPromedioEmpleados(empleados));
