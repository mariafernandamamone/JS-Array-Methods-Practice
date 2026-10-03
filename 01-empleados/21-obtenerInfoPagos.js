import { empleados } from "../data/empleados.js";

const obtenerInfoPagos = (listaEmpleados) => 
  listaEmpleados.map((empleado) => {
    const sueldoBruto = empleado.sueldo;
    const obraSocial = sueldoBruto * 0.03;
    const jubilacion = sueldoBruto * 0.11;
    const sueldoNeto = sueldoBruto - obraSocial - jubilacion;

    return {
      nombre: empleado.nombre,
      sueldoBruto,
      obraSocial,
      jubilacion,
      sueldoNeto,
    };
  });

console.log(obtenerInfoPagos(empleados));