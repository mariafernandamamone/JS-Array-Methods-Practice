import { empleados } from "../data/empleados.js";

const buscarEmpleados = (listaEmpleados, area, puesto, seniority) =>
  listaEmpleados.filter(
    (empleado) =>
      empleado.area === area &&
      empleado.puesto === puesto &&
      empleado.seniority === seniority,
  );

console.table(
  buscarEmpleados(empleados, "Desarrollo", "Backend Developer", "Senior"),
);
