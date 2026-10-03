import { empleados } from "../data/empleados.js";

const subirDeCategoria = (empleado) => {
  
    switch (empleado.seniority) {
    case "Trainee":
      empleado.seniority = "Junior";
      empleado.sueldo += 10000;
      break;

    case "Junior":
      empleado.seniority = "Semisenior";
      empleado.sueldo += 10000;
      break;

    case "Semisenior":
      empleado.seniority = "Senior";
      empleado.sueldo += 10000;
      break;
  }

  return empleado;
};

console.log("Empleado antes del ascenso:", empleados[2]);
console.log("Empleado después del ascenso:", subirDeCategoria(empleados[2]));
