import { empleados } from '../data/empleados.js';

const sueldoPromedioPorSeniority = (listaEmpleados, seniority) => {
    const sueldosPorSeniority = listaEmpleados
    .filter(empleado => empleado.seniority === seniority);
    const sumaSueldos = sueldosPorSeniority.reduce(
        (acc, empleado) => acc + empleado.sueldo,
        0
    );
    return sumaSueldos / sueldosPorSeniority.length;
};

console.log("Promedio Senior:", sueldoPromedioPorSeniority(empleados, "Senior"));