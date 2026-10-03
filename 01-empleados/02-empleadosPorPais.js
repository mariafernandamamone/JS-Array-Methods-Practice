import { empleados } from '../data/empleados.js';

const empleadosPorPais = (listaEmpleados, pais) => 
    listaEmpleados.filter(empleado => empleado.pais === pais);

console.table(empleadosPorPais(empleados, "Argentina"));